import { resolveUrl, DirectoryTree } from "../../src/resolve-url.ts";
import { assertEquals } from "../../src/deps.ts";

Deno.test("resolve URL (case 1)", () => {
  const tree: DirectoryTree[] = [
    ["xxx"],
    ["_"],
  ];
  assertEquals(resolveUrl(tree, "/xxx"), "xxx");
  assertEquals(resolveUrl(tree, "/hello"), "_");

  assertEquals(resolveUrl(tree, "xxx"), "xxx");
  assertEquals(resolveUrl(tree, "hello"), "_");
});

Deno.test("resolve URL (case 2)", () => {
  const tree: DirectoryTree[] = [
    ["user", [
      ["xxx"],
      ["_"],
    ]],
  ];
  assertEquals(resolveUrl(tree, "/user/xxx"), "user/xxx");
  assertEquals(resolveUrl(tree, "/user/hello"), "user/_");
});

Deno.test("resolve URL (case 3: hole in middle)", () => {
  const tree: DirectoryTree[] = [
    ["user", [
      ["xxx", [
        ["profile"],
      ]],
      ["_", [
        ["profile"],
      ]],
    ]],
  ];
  assertEquals(resolveUrl(tree, "/user/xxx/profile"), "user/xxx/profile");
  assertEquals(resolveUrl(tree, "/user/hello/profile"), "user/_/profile");
});

Deno.test("resolve URL (case : hole surround exact)", () => {
  const tree: DirectoryTree[] = [
    ["_", [
      ["hello", [
        ["_"],
      ]],
      ["yo", [
        ["_"],
      ]],
    ]],
  ];
  assertEquals(resolveUrl(tree, "/yo/hello/hey"), "_/hello/_");
  assertEquals(resolveUrl(tree, "/hello/yo/jo"), "_/yo/_");
  assertEquals(resolveUrl(tree, "/hello/jak/jo"), undefined);
});

Deno.test("resolve URL (case : consequtive hole)", () => {
  const tree: DirectoryTree[] = [
    ["_", [
      ["_", [
        ["yo"],
      ]],
    ]],
  ];
  assertEquals(resolveUrl(tree, "/x/y/yo"), "_/_/yo");
  assertEquals(resolveUrl(tree, "/x/y/yos"), undefined);
});

Deno.test("resolve URL (case : negative cases)", () => {
  const tree: DirectoryTree[] = [
    ["xxx"],
  ];
  assertEquals(resolveUrl(tree, "xxx"), "xxx");
  assertEquals(resolveUrl(tree, ""), "");
  assertEquals(resolveUrl(tree, "/x/y/yos"), undefined);
});
