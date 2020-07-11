import { levoTsconfigRaw } from "./levo-tsconfig-raw.ts";
import { mimeLookup } from "./mime-lookup.ts";
import { server, path, exists } from "./deps.ts";
import { levoRuntimeCode } from "../levo-runtime-raw.ts";
import { minify as minify$ } from "./minify.ts";
import { resolveUrl } from "./resolve-url.ts";
import { getDirectoryTree } from "./get-directory-tree.ts";
import { LevoServeResponse } from "../mod/levo-serve-response.ts";
import { regeneratorRuntimeCode } from "./regenerator-runtime-raw.ts";
import { MemoryCache } from "./memory-cache.ts";
import {
  MiddlewareResponse,
  MiddlewareRequest,
  ProcessRequestMiddleware,
  ProcessResponseMiddleware,
} from "./middleware.ts";

export const LevoApp = {
  start: async <Environment>({
    serverOptions,
    environment,
    minifyJs,
    cachePages,
    rootDir,
    loggingOptions,
    memoryCache: {
      maxNumberOfPages = 1024,
    } = {},
    processRequestMiddlewares,
    processResponseMiddlewares,
  }: {
    /**
     * Options for configuring server, for example hostname and port number.
     */
    serverOptions: server.HTTPOptions;

    /**
     * Environment variables that will be passed to client and server files.
     */
    environment: Environment;

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

    /**
     * Settings for memory cache
     */
    memoryCache?: {
      /**
       * Max number of pages to be cached in memory. 
       * Default value is 1024.
       */
      maxNumberOfPages?: number;
    };

    /**
     * Logging option at browser.
     */
    loggingOptions?: {
      /**
       * Log dispatched action.
       */
      action?: boolean;

      /**
       * Log resulting patches from the action
       */
      patches?: boolean;

      /**
       * Log model that is updated before/after action dispatched
       */
      model?: boolean;
    };

    /**
     * List of middlewares that will be used to process request. 
     */
    processRequestMiddlewares: ProcessRequestMiddleware[];

    /**
     * List of middlewares that will be used to process response.
     */
    processResponseMiddlewares: ProcessResponseMiddleware[];
  }): Promise<void> => {
    const s = server.serve(serverOptions);
    const decoder = new TextDecoder("utf-8");
    const encoder = new TextEncoder();

    const memoryCache = new MemoryCache<string>(
      { maxNumberOfKeys: maxNumberOfPages },
    );

    const minify = minifyJs
      ? minify$
      : (code: string) => ({ code, error: undefined });

    await Deno.writeFile("levo.tsconfig.json", encoder.encode(levoTsconfigRaw));
    const bundle = async (filename: string, options?: {
      overrideCache: boolean;
    }) => {
      const cachePath = filename + ".cache";
      if (
        cachePages && !options?.overrideCache &&
        (memoryCache.get(cachePath) || await exists(cachePath))
      ) {
        return memoryCache.get(cachePath) ??
          decoder.decode(await Deno.readFile(cachePath));
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
          memoryCache.set(cachePath, final);
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
          } else if (dir.isFile && dir.name === "_client.ts") {
            const filename = dirname + path.SEP + dir.name;
            bundle(filename, { overrideCache: true });
          }
        });

      scanDir(rootDir.pathname);
    }

    console.log(
      `Server listening on ${serverOptions.hostname ??
        "0.0.0.0"}:${serverOptions.port}`,
    );

    if (!(await exists(rootDir.pathname))) {
      throw new Error(`Root path '${rootDir.pathname}' does not exists.`);
    }
    const cachedDirectoryTree = getDirectoryTree(
      rootDir.pathname,
      { ignoreFiles: [] },
    );

    const toMiddlewareRequest = async (
      request: server.ServerRequest,
    ): Promise<MiddlewareRequest> => ({
      proto: request.proto,
      protoMajor: request.protoMajor,
      protoMinor: request.protoMinor,
      url: request.url,
      method: request.method,
      headers: (() => {
        const result: Record<string, string> = {};
        request.headers.forEach((value, key) =>
          result[key.toLowerCase()] = value
        );
        return result;
      })(),
      body: await Deno.readAll(request.body),
    });

    const processRequest = async (
      request: server.ServerRequest,
    ): Promise<void> => {
      const middlewareRequest = await toMiddlewareRequest(request);
      return processRequestMiddlewares.reduce(
        (promise, middleware) =>
          promise.then(() => middleware(middlewareRequest)),
        Promise.resolve(),
      );
    };

    const processResponse = async (
      request: server.ServerRequest,
      response: MiddlewareResponse,
    ): Promise<server.Response> => {
      const middlewareRequest = await toMiddlewareRequest(request);
      return processResponseMiddlewares.reduce(
        (promise, middleware) =>
          promise.then((response) => middleware(middlewareRequest, response)),
        Promise.resolve(response),
      )
        .then((response) => {
          return {
            status: response.status,
            headers: new Headers(response.headers),
            body: response.body,
            trailers: response.trailers,
          };
        });
    };
    for await (const req of s) {
      try {
        await processRequest(req);
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
          await req.respond({ status: 404 });
          continue;
        }

        const pathname = (rootDir.pathname.endsWith(path.SEP)
          ? rootDir.pathname
          : rootDir.pathname + path.SEP) + resolvedUrl;

        if (pathname.includes("_assets")) {
          if (!(await exists(pathname))) {
            await req.respond({ status: 404 });
            continue;
          }
          const file = await Deno.readFile(pathname);
          const contentType = mimeLookup(pathname);
          await req.respond(
            await processResponse(req, {
              status: 200,
              headers: contentType
                ? {
                  "content-type": contentType,
                }
                : {},
              body: file,
            }),
          );
          continue;
        }

        const dirname = pathname.endsWith(path.SEP)
          ? pathname
          : pathname + path.SEP;

        const handlerPath = new URL(
          `_server.ts`,
          `file://` + dirname,
        );

        if (!(await exists(handlerPath.pathname))) {
          console.error(
            `_server.ts not found under at ${handlerPath.pathname}`,
          );
          await req.respond({ status: 404 });
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
            deno: true,
          },
        );
        worker.postMessage({
          url: req.url,
          body: req.body,
          method: req.method,
          headers: req.headers,
          search: url.search,
          environment,
        });
        worker.addEventListener(
          "message",
          (async ({ data: response }: {
            data: LevoServeResponse<any> & { error?: Error };
          }) => {
            try {
              if (response.error) {
                console.error(response.error);
                await req.respond({ status: 500 });
                return;
              }
              switch (response.$) {
                case "redirect": {
                  await req.respond({
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
                  await req.respond({
                    headers,
                    status: response.response.status,
                    body: encoder.encode(response.response.body),
                  });
                  break;
                }
                case "page": {
                  const filename = dirname + "_client.ts";
                  console.log(`Trying to bundle: ${filename}`);
                  const code = await bundle(filename);
                  await req.respond(
                    await processResponse(req, {
                      status: 200,
                      headers: {
                        "content-type": "text/html",
                      },
                      body: encoder.encode(`
      <!DOCTYPE html>
      ${response.html}
      <script>
      ${
                        minifyJs
                          ? // This is necessary because we use Babel to transform the bundled code down to ES5
                            `(()=>{${regeneratorRuntimeCode}})();`
                          : ""
                      }
          (()=>{${code}})();
          (()=>{window.$levo.model=${JSON.stringify(response.model)}})();
          (()=>{window.$levo.log=${JSON.stringify(loggingOptions)}})();
          (()=>{${levoRuntimeCode}})();
      </script>
                    `.trim()),
                    }),
                  );
                }
              }
            } catch (error) {
              // TODO: try to respond back to user,
              //       cannot use req.respond as the pipe is already broken
              console.log("Caught error in worker", error);
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
        await req.respond({ status: 500 });
        console.error("Caught error: ", error);
      }
    }
  },
};
