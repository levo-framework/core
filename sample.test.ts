import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
export * as babelstandalone from "https://dev.jspm.io/@babel/standalone@7.10.1";

Deno.test('sample', () => {
  assertEquals(1, 1)
})