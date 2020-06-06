export {
  assert,
  assertEquals,
} from "https://deno.land/std@0.53.0/testing/asserts.ts";

export { exists, existsSync } from "https://deno.land/std@0.53.0/fs/mod.ts";

export * as server from "https://deno.land/std@0.53.0/http/server.ts";

export * as path from "https://deno.land/std@0.53.0/path/mod.ts";

export {
  gzipDecode,
  gzipEncode,
} from "https://github.com/manyuanrong/wasm_gzip/raw/53d036/mod.ts";

export { compress as brotliCompress } from "https://deno.land/x/brotli@v0.1.3/mod.ts";

export * as babelstandalone from "https://dev.jspm.io/@babel/standalone@7.10.1";
