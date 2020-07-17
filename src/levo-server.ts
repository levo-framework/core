import { levoTsconfigRaw } from "./levo-tsconfig-raw.ts";
import { mimeLookup } from "./mime-lookup.ts";
import { server, path, exists, CleanCSS } from "./deps.ts";
import { levoRuntimeCode } from "../levo-runtime-raw.ts";
import { minifyJavascript as minifyJavascript } from "./minify-js.ts";
import { resolveUrl } from "./resolve-url.ts";
import { getDirectoryTree } from "./get-directory-tree.ts";
import { LevoServeResponse } from "../mod/levo-serve-response.ts";
import { LevoServe } from "../mod/levo-serve.ts";
import { regeneratorRuntimeCode } from "./regenerator-runtime-raw.ts";
import { MemoryCache } from "./memory-cache.ts";
import {
  MiddlewareResponse,
  MiddlewareRequest,
  ProcessRequestMiddleware,
  ProcessResponseMiddleware,
} from "./middleware.ts";
import { watchFile } from "./watch-file.ts";
import { watchDependencies } from "./watch-dependencies.ts";

export const LevoApp = {
  start: async <Environment>({
    serverOptions,
    environment,
    minifyJs,
    minifyCss,
    cacheDirectoryTree,
    rootDir,
    loggingOptions,
    memoryCache: {
      maxNumberOfPages = 1024,
    } = {},
    watchFileChanges,
    processRequestMiddlewares,
    processResponseMiddlewares,
    importMapPath,
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
     * Path to import map that should be used when bundling client code.
     */
    importMapPath?: URL;

    /**
     * Minify Javascript code that will be served to client.  
     * Should be set to true in production environment, while false in development.
     * Default value is false.
     */
    minifyJs?: boolean;

    /**
     * Minify CSS files that will be served to client. 
     * Should be set to true in production environment, while false in development.
     * Default value is false.
     */
    minifyCss?: boolean;

    /**
     * Cache the directory tree to improve route searching performance.
     * Should be set to true in production environment, while false in development.
     * Default value is false.
     */
    cacheDirectoryTree?: boolean;

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
     * Watch for file changes. Default value is false.
     * Should be set to true during development, but false in production.
     */
    watchFileChanges?: boolean;

    /**
     * List of middlewares that will be used to process request. 
     */
    processRequestMiddlewares: ProcessRequestMiddleware[];

    /**
     * List of middlewares that will be used to process response.
     */
    processResponseMiddlewares: ProcessResponseMiddleware[];
  }): Promise<void> => {
    const serverInstance = server.serve(serverOptions);
    const decoder = new TextDecoder("utf-8");
    const encoder = new TextEncoder();

    const pageCache = new MemoryCache<string>(
      { maxNumberOfKeys: maxNumberOfPages },
    );

    const serverFunctionCache = new MemoryCache<
      Promise<{
        default?: LevoServe<unknown, unknown>;
      }>
    >({
      maxNumberOfKeys: Number.POSITIVE_INFINITY,
    });

    await Deno.writeFile("levo.tsconfig.json", encoder.encode(levoTsconfigRaw));

    const bundle = async ({
      filename,
      includeLevoTsconfig,
      minifyBundle,
    }: {
      filename: string;
      includeLevoTsconfig: boolean;
      minifyBundle: boolean;
    }) => {
      const now = Date.now();
      const bundled = decoder.decode(
        await Deno.run({
          cmd: [
            "deno",
            "bundle",
            ...(includeLevoTsconfig
              ? [
                "--config=levo.tsconfig.json",
              ]
              : []),
            ...(importMapPath
              ? ["--unstable", `--importmap=${importMapPath.pathname}`]
              : []),
            filename,
          ],
          stdout: "piped",
        })
          .output(),
      );
      console.log(
        `Finish bundle (${
          ((Date.now() - now) / 1000).toFixed(2)
        }s): ${filename}`,
      );

      if (!minifyBundle) {
        return bundled;
      } else {
        const { code: minified, error } = minifyJavascript(
          bundled.replace(/export const/gi, "const"),
        );
        if (error) {
          console.error(`Failed to minify, using unminified code`, error);
        }
        return error ? bundled : minified;
      }
    };

    const bundleClientCode = async (filename: string, options: {
      overrideCache: boolean;
    }) => {
      const cachePath = filename + ".cache";
      if (
        !options.overrideCache &&
        (pageCache.get(cachePath) || await exists(cachePath))
      ) {
        return pageCache.get(cachePath) ??
          decoder.decode(await Deno.readFile(cachePath));
      } else {
        const final = await bundle(
          {
            filename,
            includeLevoTsconfig: true,
            minifyBundle: Boolean(minifyJs),
          },
        );
        pageCache.set(cachePath, final);
        await Deno.writeFile(cachePath, encoder.encode(final));
        return final;
      }
    };

    const scanDir = (dirname: string) =>
      Array.from(Deno.readDirSync(dirname)).forEach((dir) => {
        if (dir.isDirectory) {
          scanDir(dirname + path.SEP + dir.name);
        } else if (dir.isFile && dir.name === "_client.ts") {
          const filename = dirname + path.SEP + dir.name;
          const execute = () =>
            bundleClientCode(filename, { overrideCache: true });
          execute();
          if (watchFileChanges) {
            watchDependencies({ filename, onChange: execute });
          }
        } else if (dir.isFile && dir.name === "_server.ts") {
          const filename = dirname + path.SEP + dir.name;
          const execute = () => {
            bundle(
              { filename, includeLevoTsconfig: false, minifyBundle: false },
            )
              .then(async (content) => {
                const tempPath = filename + Date.now() + ".cache";
                await Deno.writeFile(
                  tempPath,
                  new TextEncoder().encode(content),
                );
                const imported = await import("file://" + tempPath);
                serverFunctionCache.set(filename, Promise.resolve(imported));
                await Deno.remove(tempPath);
              });
          };
          execute();
          if (watchFileChanges) {
            watchDependencies({ filename, onChange: execute });
          }
        }
      });

    scanDir(rootDir.pathname);

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

    for await (const req of serverInstance) {
      try {
        await processRequest(req);
        const url = new URL("http://x/" + req.url);
        const resolvedUrl = resolveUrl(
          cacheDirectoryTree
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
          const body = (() => {
            if (minifyCss && contentType === "text/css") {
              const result = new CleanCSS().minify(
                new TextDecoder().decode(file),
              );
              if (result.warnings.length > 0) {
                result.warnings.forEach((warning): void =>
                  console.warn(warning)
                );
              }
              if (result.errors.length > 0) {
                result.errors.forEach((error): void =>
                  console.error(error)
                );
              }
              return new TextEncoder().encode(result.styles);
            } else {
              return file;
            }
          })();
          await req.respond(
            await processResponse(req, {
              status: 200,
              body,
              headers: contentType
                ? {
                  "content-type": contentType,
                }
                : {},
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

        const handleRequest = await serverFunctionCache.get(
          handlerPath.pathname,
        );
        if (!handleRequest?.default) {
          throw new Error(
            `No default export found at "${handlerPath.pathname}"`,
          );
        }
        const response: LevoServeResponse<unknown> = await handleRequest
          ?.default?.({
            url: req.url,
            body: await Deno.readAll(req.body),
            method: req.method,
            contentLength: req.contentLength,
            headers: req.headers,
            search: url.search,
            proto: req.proto,
            protoMajor: req.protoMajor,
            protoMinor: req.protoMinor,
            environment,
          });

        switch (response.$) {
          case "redirect": {
            await req.respond({
              body: encoder.encode(
                `<script>window.location.href="${response.url}"</script>`
                  .trim(),
              ),
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
            const code = await bundleClientCode(
              filename,
              { overrideCache: false },
            );
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
        // NOTE: Please dont use `req.respond` here
        // If not the loop will be broken
        console.error("Caught error: ", error);
      }
    }
  },
};
