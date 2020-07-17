import { assertEquals } from "../deps.ts";
import { resolveImportMap } from "../../src/resolve-import-map.ts";

Deno.test("resolve import map", () => {
  const importMap = {
    "foo/": "./bar/",
    "levo/": "../../mod/",
    "asserts": "https://deno.land/std@0.61.0/testing/asserts.ts",
    "environment": "./environment.ts",
  };
  assertEquals(resolveImportMap(importMap, "foo/yo"), "./bar/yo");
  assertEquals(resolveImportMap(importMap, "foo/"), "./bar/");
  assertEquals(
    resolveImportMap(importMap, "levo/view.tsx"),
    "../../mod/view.tsx",
  );
  assertEquals(
    resolveImportMap(importMap, "asserts"),
    "https://deno.land/std@0.61.0/testing/asserts.ts",
  );
  assertEquals(resolveImportMap(importMap, "environment"), "./environment.ts");
  assertEquals(resolveImportMap(importMap, "x"), undefined);
});
