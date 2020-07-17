import { extractDependencies } from "../../src/extract-dependencies.ts";
import { assertEquals } from "../deps.ts";

Deno.test("extract dependencies", () => {
  const result = extractDependencies(`
    import * as from "a.ts"
    import {b} from"b.ts"
    import c from  "c.ts"
    export d from 
    "d.ts"

    import * as from 'e.ts'
    import {f} from'f.ts'
    import g from  'g.ts'
    export h  from 
    'h.ts'
  `);
  assertEquals(result, [
    "a.ts",
    "b.ts",
    "c.ts",
    "d.ts",
    "e.ts",
    "f.ts",
    "g.ts",
    "h.ts",
  ]);
});
