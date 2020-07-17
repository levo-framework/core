import { assertEquals } from "../deps.ts";
import { getLocalDependencies } from "../../src/get-local-dependencies.ts";

Deno.test("get local dependencies (relative path)", async () => {
  assertEquals(await getLocalDependencies("./test/unit/test-files/a.ts"), [
    "test/unit/test-files/a.ts",
    "test/unit/test-files/b.ts",
    "test/unit/test-files/c.ts",
  ]);
});

Deno.test("get local dependencies (absolute path)", async () => {
  assertEquals(
    await getLocalDependencies(Deno.cwd() + "/test/unit/test-files/a.ts"),
    [
      "test/unit/test-files/a.ts",
      "test/unit/test-files/b.ts",
      "test/unit/test-files/c.ts",
    ],
  );
});
