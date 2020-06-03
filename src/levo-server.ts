import { levoTsconfigRaw } from "./levo-tsconfig-raw.ts";
import { mimeLookup } from "./mime-lookup.ts";
import { fileExists } from "./file-exists.ts";
import { server, path, gzipEncode, brotliCompress } from "./deps.ts";
import { levoRuntimeCode } from "../levo-runtime-raw.ts";
import { minify as minify$ } from "./minify.ts";

export const levo = {
  start: async ({
    minifyJs = true,
    ...options
  }: server.HTTPOptions & {

    /**
     * Minify Javascript code that will be served to client.  
     * Default value is true
     */
    minifyJs?: boolean
  }) => {
    const s = server.serve(options);
    const decoder = new TextDecoder("utf-8");

    const minify = minifyJs ? minify$ : (code: string) => ({code, error: undefined})

    const minifiedLevoRuntimeCode = minify(levoRuntimeCode).code

    await Deno.writeFile(
      "levo.tsconfig.json",
      new TextEncoder().encode(levoTsconfigRaw),
    );
    let cache: Record<string, string> = {}
    const bundle = async (filename: string) => {
      if(cache[filename]) {
        return cache[filename]
      }
      else {
        const bundled = decoder.decode(
          await Deno.run({
            cmd: ["deno", "bundle", "--config", "levo.tsconfig.json", filename],
            stdout: "piped",
          })
            .output(),
        );

        const {code: minified, error} = minify(bundled.replace(/export const/gi, "const"));
        if(error) {
          console.error(`Failed to minify, using unminified code`, error); 
        }
        cache[filename] = error ? bundled : minified
        return cache[filename]
      }
    };

    console.log(
      `Server listening on ${options.hostname ?? "0.0.0.0"}:${options.port}`,
    );
    for await (const req of s) {
      try {
        const headers: Record<string, string> = {};
        req.headers.forEach((value, key) => {
          headers[key] = value;
        });
        console.log(new Date(), `${req.method}\nURL: ${req.url}`);
        const acceptEncoding = req.headers.get('accept-encoding')
        if (req.url.includes("levo.assets")) {
          const file = await Deno.readFile("." + req.url);
          const initialHeaders = new Headers();
          const contentType = mimeLookup(req.url);
          if (contentType) {
            initialHeaders.set("content-type", contentType);
          }

          const { body, headers } = compress({
            acceptEncoding,
            headers: initialHeaders,
            body: file
          })
          req.respond({ body, headers })
          continue
        }

        const dirname = `.${req.url}${path.SEP}`;
        const handlerPath = dirname + `levo.server.ts`;
        if (!(await fileExists(handlerPath))) {
          console.error(`No levo.server.ts found under ${dirname}`);
          req.respond({ status: 500 });
          continue;
        }
        const worker = new Worker(handlerPath, {
          type: "module",
          //@ts-ignore
          deno: true,
        });
        worker.postMessage({
          url: req.url,
          body: req.body,
          method: req.method,
          headers: req.headers,
        });
        worker.addEventListener(
          "message",
          async ({ data: { model, html, error } }: any) => {
            if (error) {
              console.error(error);
              req.respond({ status: 500 });
              return;
            }
            const code = await bundle(dirname + "levo.client.ts")
            const initialHeaders = new Headers();
            initialHeaders.set("content-type", "text/html");
            const { body, headers } = compress({
              acceptEncoding,
              headers: initialHeaders,
              body: new TextEncoder().encode(`
${html}
${minifyJs 
  ? `<script src="https://unpkg.com/regenerator-runtime@0.13.1/runtime.js"></script>`
  : ``
}
<script>
    (()=>{${code}})();
    (()=>{window.$levoModel=${JSON.stringify(model)}})();
    (()=>{${minifiedLevoRuntimeCode}})();
</script>
              `.trim())
            })
            req.respond({ body, headers });
          },
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
        console.error(error);
      }
    }
  },
};

const compress = ({
  headers,
  body,
  acceptEncoding
}: {
  headers: Headers,
  body: Uint8Array
  acceptEncoding: string | null
}): {
  headers: Headers,
  body: Uint8Array
} => {
  if (acceptEncoding?.includes('br')) {
    headers.set("content-encoding", 'br')
    const compressedFile = brotliCompress(body)
    headers.set("content-length", compressedFile.length.toString())
    return { headers, body: compressedFile, };
  }
  else if (acceptEncoding?.includes('gzip')) {
    headers.set("content-encoding", 'gzip')
    const compressedFile = gzipEncode(body)
    headers.set("content-length", compressedFile.length.toString())
    return { headers, body: compressedFile, };
  }
  else {
    return { headers, body }
  }
}
