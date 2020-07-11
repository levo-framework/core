import { ProcessResponseMiddleware } from "./middleware.ts";
import { gzipEncode } from "https://github.com/manyuanrong/wasm_gzip/raw/53d036/mod.ts";
import { compress as brotliCompress } from "https://deno.land/x/brotli@v0.1.3/mod.ts";

export const compression: ProcessResponseMiddleware = async (
  request,
  response,
) => {
  const acceptEncoding = request.headers["Accept-Encoding"];
  if (acceptEncoding?.includes("br")) {
    const compressedBody = brotliCompress(response.body);
    return {
      ...response,
      headers: {
        ...response.headers,
        "content-encoding": "br",
        "levo-content-encoding": "br",
        "content-length": compressedBody.length.toString(),
      },
      body: compressedBody,
    };
  } else if (acceptEncoding?.includes("gzip")) {
    const compressedBody = gzipEncode(response.body);
    return {
      ...response,
      headers: {
        ...response.headers,
        "content-encoding": "gzip",
        "levo-content-encoding": "gzip",
        "content-length": compressedBody.length.toString(),
      },
      body: compressedBody,
    };
  } else {
    return response;
  }
};
