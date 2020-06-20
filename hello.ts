import { compress as brotliCompress } from "https://deno.land/x/brotli@v0.1.3/mod.ts";

Deno.test('hello', () => {
  brotliCompress(new TextEncoder().encode('his'))
  console.log('helo')
})
