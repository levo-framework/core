import { assertEquals } from "../../src/deps.ts";
import { getDirectoryTree } from "../../src/get-directory-tree.ts";

Deno.test("get directory tree", () => {
  // why './home/' instead of './demo/home' ?
  // Because inside `main.test.ts`, already change directory to `demo` via Deno.chdir
  assertEquals(getDirectoryTree("./home"), [
    ["levo.server.ts"],
    ["levo.assets", [
      ["index.css"],
    ]],
    ["levo.client.ts.cache"],
    ["init.ts"],
    ["levo.client.ts"],
    ["view.ts"],
    ["about", [
      ["levo.server.ts"],
      ["levo.client.ts.cache"],
      ["init.ts"],
      ["levo.client.ts"],
      ["view.ts"],
      ["model.ts"],
      ["action.ts"],
      ["update.ts"],
    ]],
    ["model.ts"],
    ["action.ts"],
    ["update.ts"],
  ]);
});
