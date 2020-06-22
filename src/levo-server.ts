import { levoTsconfigRaw } from "./levo-tsconfig-raw.ts";
import { mimeLookup } from "./mime-lookup.ts";
import { server, path, gzipEncode, brotliCompress, exists } from "./deps.ts";
import { levoRuntimeCode } from "../levo-runtime-raw.ts";
import { minify as minify$ } from "./minify.ts";
import { resolveUrl } from "./resolve-url.ts";
import { getDirectoryTree } from "./get-directory-tree.ts";
import { LevoServeResponse } from "../mod/levo-serve-response.ts";

export const LevoApp = {
  start: async ({
    minifyJs,
    cachePages,
    rootDir,
    ...options
  }: server.HTTPOptions & {
    /**
     * Root directory for serving web pages.  
     * For example, if you want to specify `./src/root`, 
     * the value should be `new URL('./src/root', import.meta.url)`
     * 
     */
    rootDir: URL;

    /**
     * Minify Javascript code that will be served to client.  
     * Should be set to true in production environment, while false in development.
     * Default value is false.
     */
    minifyJs?: boolean;

    /**
     * Generate cached pages on startup and serve only cached pages.  
     * Should be set to true in production environment, while false in development.
     * Default value is false.
     */
    cachePages?: boolean;
  }) => {
    const s = server.serve(options);
    const decoder = new TextDecoder("utf-8");
    const encoder = new TextEncoder();

    const minify = minifyJs
      ? minify$
      : (code: string) => ({ code, error: undefined });

    const minifiedLevoRuntimeCode = minify(levoRuntimeCode).code;

    await Deno.writeFile("levo.tsconfig.json", encoder.encode(levoTsconfigRaw));
    const bundle = async (filename: string, options?: {
      overrideCache: boolean;
    }) => {
      const cachePath = filename + ".cache";
      if (cachePages && !options?.overrideCache && await exists(cachePath)) {
        return decoder.decode(await Deno.readFile(cachePath));
      } else {
        const now = Date.now();
        const bundled = decoder.decode(
          await Deno.run({
            cmd: ["deno", "bundle", "--config", "levo.tsconfig.json", filename],
            stdout: "piped",
          })
            .output(),
        );
        console.log(
          `Finish bundle (${
            ((Date.now() - now) / 1000).toFixed(2)
          }s): ${cachePath}`,
        );

        const { code: minified, error } = minify(
          bundled.replace(/export const/gi, "const"),
        );
        if (error) {
          console.error(`Failed to minify, using unminified code`, error);
        }
        const final = error ? bundled : minified;
        if (cachePages) {
          await Deno.writeFile(cachePath, encoder.encode(final));
        }
        return final;
      }
    };

    if (cachePages) {
      const scanDir = (dirname: string) =>
        Array.from(Deno.readDirSync(dirname)).forEach((dir) => {
          if (dir.isDirectory) {
            scanDir(dirname + path.SEP + dir.name);
          } else if (dir.isFile && dir.name === "levo.client.ts") {
            const filename = dirname + path.SEP + dir.name;
            bundle(filename, { overrideCache: true });
          }
        });

      scanDir(".");
    }

    console.log(
      `Server listening on ${options.hostname ?? "0.0.0.0"}:${options.port}`,
    );

    if (!(await exists(rootDir.pathname))) {
      throw new Error(`Root path '${rootDir.pathname}' does not exists.`);
    }
    const cachedDirectoryTree = getDirectoryTree(
      rootDir.pathname,
      { ignoreFiles: [] },
    );
    for await (const req of s) {
      try {
        console.log(new Date(), `${req.method} ${req.url}`);
        const url = new URL("http://x/" + req.url);
        const resolvedUrl = resolveUrl(
          cachePages
            ? cachedDirectoryTree
            : getDirectoryTree(rootDir.pathname, { ignoreFiles: [] }),
          url.pathname,
        );

        if (resolvedUrl === undefined) {
          console.error(
            new Date(),
            `${req.url} does not point to a directory, responding with 404`,
          );
          req.respond({ status: 404 });
          continue;
        }

        const pathname = (rootDir.pathname.endsWith(path.SEP)
          ? rootDir.pathname
          : rootDir.pathname + path.SEP) + resolvedUrl;

        const acceptEncoding = req.headers.get("accept-encoding");
        if (pathname.includes("levo.assets")) {
          if (!(await exists(pathname))) {
            req.respond({ status: 404 });
            continue;
          }
          const file = await Deno.readFile(pathname);
          const initialHeaders = new Headers();
          const contentType = mimeLookup(pathname);
          if (contentType) {
            initialHeaders.set("content-type", contentType);
          }

          const { body, headers } = compress({
            acceptEncoding,
            headers: initialHeaders,
            body: file,
          });
          req.respond({ body, headers });
          continue;
        }

        const dirname = pathname.endsWith(path.SEP)
          ? pathname
          : pathname + path.SEP;

        const handlerPath = new URL(
          `levo.server.ts`,
          `file://` + dirname,
        );

        if (!(await exists(handlerPath.pathname))) {
          console.error(
            `No levo.server.ts found under at ${handlerPath.pathname}`,
          );
          req.respond({ status: 404 });
          continue;
        }

        const worker = new Worker(
          // Refer: https://stackoverflow.com/a/41790024/6587634
          handlerPath.href +
            (cachePages
              ? ""
              : `?${(Math.random() * 1000000)}`),
          {
            type: "module",
            //@ts-ignore
            deno: true,
          },
        );
        worker.postMessage({
          url: req.url,
          body: req.body,
          method: req.method,
          headers: req.headers,
          search: url.search,
        });
        worker.addEventListener(
          "message",
          (async ({ data: response }: {
            data: LevoServeResponse<any> & { error?: Error };
          }) => {
            if (response.error) {
              console.error(response.error);
              req.respond({ status: 500 });
              return;
            }
            switch (response.$) {
              case "redirect": {
                req.respond({
                  body: encoder.encode(`
                    <script>window.location.href="${response.url}"</script>
                  `.trim()),
                });
                break;
              }
              case "custom": {
                const headers = new Headers();
                Object.entries(response.response.headers ?? {}).forEach(
                  ([key, value]) => {
                    headers.set(key, value);
                  },
                );
                req.respond({
                  headers,
                  status: response.response.status,
                  body: encoder.encode(response.response.body),
                });
                break;
              }
              case "page": {
                const filename = dirname + "levo.client.ts";
                console.log(`Trying to bundle: ${filename}`);
                const code = await bundle(filename);
                const initialHeaders = new Headers();
                initialHeaders.set("content-type", "text/html");
                const { body, headers } = compress({
                  acceptEncoding,
                  headers: initialHeaders,
                  body: encoder.encode(`
    <!DOCTYPE html>
    ${response.html}
    ${
                    minifyJs
                      ? // This is necessary because we use Babel to transform the bundled code down to ES5
                        `<script src="https://unpkg.com/regenerator-runtime@0.13.1/runtime.js"></script>`
                      : ``
                  }
    <script>
        (()=>{${code}})();
        (()=>{window.$levoModel=${JSON.stringify(response.model)}})();
        (()=>{${minifiedLevoRuntimeCode}})();
    </script>
                  `.trim()),
                });
                req.respond({ body, headers });
              }
            }
          }) as any,
        );
        worker.addEventListener("error", (error) => {
          req.respond({ status: 500 });
          console.error(error);
        });
        worker.addEventListener("messageerror", (error) => {
          req.respond({ status: 500 });
          console.error(error);
        });
      } catch (error) {
        console.error("Caught error: ", error);
      }
    }
  },
};

const compress = ({
  headers,
  body,
  acceptEncoding,
}: {
  headers: Headers;
  body: Uint8Array;
  acceptEncoding: string | null;
}): {
  headers: Headers;
  body: Uint8Array;
} => {
  if (acceptEncoding?.includes("br")) {
    headers.set("content-encoding", "br");
    headers.set("levo-content-encoding", "br"); // for testing purpose
    const compressedBody = brotliCompress(body);
    headers.set("content-length", compressedBody.length.toString());
    return { headers, body: compressedBody };
  } else if (acceptEncoding?.includes("gzip")) {
    headers.set("content-encoding", "gzip");
    headers.set("levo-content-encoding", "gzip"); // for testing purpose
    const compressedBody = gzipEncode(body);
    headers.set("content-length", compressedBody.length.toString());
    return { headers, body: compressedBody };
  } else {
    return { headers, body };
  }
};
