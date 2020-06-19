import { assertEquals } from "../../src/deps.ts";
import { getDirectoryTree } from "../../src/get-directory-tree.ts";

Deno.test("get directory tree", () => {
  assertEquals(
    getDirectoryTree("./demo/home/user", {
      ignoreFiles: ["levo.client.ts.cache"],
    }),
    [
      ["_", [
        ["levo.client.ts"],
        ["levo.server.ts"],
        ["types.ts"],
        ["update.ts"],
        ["view.tsx"],
      ]],
      ["xxx", [
        ["levo.client.ts"],
        ["levo.server.ts"],
        ["types.ts"],
        ["update.ts"],
        ["view.tsx"],
      ]],
    ],
  );
});
