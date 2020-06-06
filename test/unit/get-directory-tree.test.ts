import { assertEquals } from "../../src/deps.ts";
import { getDirectoryTree } from "../../src/get-directory-tree.ts";

Deno.test("get directory tree", () => {
  assertEquals(
    getDirectoryTree("./demo/home/user", {
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
