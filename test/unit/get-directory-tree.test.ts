import { assertEquals } from "../../src/deps.ts";
import { getDirectoryTree } from "../../src/get-directory-tree.ts";

Deno.test("get directory tree", () => {
  assertEquals(
    getDirectoryTree("./demo/home/user", {
      ignoreFiles: ["levo.client.ts.cache"],
    }),
    [
      ["_", [
        ["action.ts"],
        ["init.ts"],
        ["levo.client.ts"],
        ["levo.server.ts"],
        ["model.ts"],
        ["update.ts"],
        ["view.tsx"],
      ]],
      ["xxx", [
        ["action.ts"],
        ["init.ts"],
        ["levo.client.ts"],
        ["levo.server.ts"],
        ["model.ts"],
        ["update.ts"],
        ["view.tsx"],
      ]],
    ],
  );
});
