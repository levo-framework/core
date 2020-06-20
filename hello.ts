export { compress as brotliCompress } from "https://deno.land/x/brotli@v0.1.3/mod.ts";

brotliCompress(new TextEncoder().encode('his'))

console.log('helo')