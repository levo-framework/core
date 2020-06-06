import { assertEquals } from "./src/deps.ts"
export { compress as brotliCompress } from "https://deno.land/x/brotli@v0.1.3/mod.ts";

Deno.test('sample', () => {
  assertEquals(1, 1)
})