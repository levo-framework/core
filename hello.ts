import { gzipEncode } from "https://github.com/manyuanrong/wasm_gzip/raw/53d036/mod.ts";

gzipEncode(new TextEncoder().encode('hi'))

console.log('helo')