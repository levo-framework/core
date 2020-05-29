
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { arrayDiff } from "../src/array-diff.ts";

Deno.test("array-diff", () => {
  assertEquals(arrayDiff([5, 4, 3, 2, 1], [1, 2, 3]), [5, 4]);

  assertEquals(arrayDiff([2, 3, 4], [3, 2, 1, 4]), [])
});