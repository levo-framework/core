import { assertEquals } from "../../src/deps.ts";
import { getDirectoryTree } from "../../src/get-directory-tree.ts";

Deno.test("get directory tree", () => {
  // why './home/' instead of './demo/home' ?
  // Because inside `main.test.ts`, already change directory to `demo` via Deno.chdir
  assertEquals(
    getDirectoryTree("./home/user", {
      ignoreFiles: ["levo.client.ts.cache"],
    }),
    [
      ["xxx", [
        ["levo.server.ts"],
        ["init.ts"],
        ["levo.client.ts"],
        ["view.ts"],
        ["model.ts"],
        ["action.ts"],
        ["update.ts"],
      ]],
      ["_", [
        ["levo.server.ts"],
        ["init.ts"],
        ["levo.client.ts"],
        ["view.ts"],
        ["model.ts"],
        ["action.ts"],
        ["update.ts"],
      ]],
    ],
  );
});
