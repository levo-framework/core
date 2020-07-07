import { assertEquals } from "../../src/deps.ts";
import { getDirectoryTree } from "../../src/get-directory-tree.ts";

Deno.test("get directory tree", () => {
  assertEquals(
    getDirectoryTree("./demo/home/user", {
      ignoreFiles: ["_client.ts.cache"],
    }),
    [
      ["_", [
        ["_client.ts"],
        ["_server.ts"],
        ["types.ts"],
        ["update.ts"],
        ["view.tsx"],
      ]],
      ["xxx", [
        ["_client.ts"],
        ["_server.ts"],
        ["types.ts"],
        ["update.ts"],
        ["view.tsx"],
      ]],
    ],
  );
});
