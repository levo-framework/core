import { assertEquals } from "../deps.ts";
import { getLocalDependencies } from "../../src/get-local-dependencies.ts";

Deno.test("get local dependencies (relative path)", async () => {
  assertEquals(
    await getLocalDependencies(
      { filename: "./test/unit/test-files/a.ts", truncateCommonPrefix: true },
    ),
    [
      "/a.ts",
      "/b.ts",
      "/c.ts",
    ],
  );

  Deno.chdir("./test");
  assertEquals(
    await getLocalDependencies(
      { filename: "../test/unit/test-files/a.ts", truncateCommonPrefix: true },
    ),
    [
      "/a.ts",
      "/b.ts",
      "/c.ts",
    ],
  );
  Deno.chdir("..");
});

Deno.test("get local dependencies (absolute path)", async () => {
  assertEquals(
    await getLocalDependencies(
      {
        filename: Deno.cwd() + "/test/unit/test-files/a.ts",
        truncateCommonPrefix: true,
      },
    ),
    [
      "/a.ts",
      "/b.ts",
      "/c.ts",
    ],
  );
});

Deno.test("get local dependencies (with import map)", async () => {
  const path = Deno.cwd() + "/test/unit/test-files/";
  assertEquals(
    await getLocalDependencies(
      {
        filename: path + "d.ts",
        truncateCommonPrefix: true,
        importMap: { "foo": path + "a.ts" },
      },
    ),
    [
      "/a.ts",
      "/b.ts",
      "/c.ts",
      "/d.ts",
    ],
  );
});

Deno.test("get local dependencies (shouldnt include remote dependencies)", async () => {
  const path = Deno.cwd() + "/test/unit/test-files/";
  assertEquals(
    await getLocalDependencies(
      {
        filename: path + "d.ts",
        truncateCommonPrefix: false,
        importMap: { "foo": "https://hello.world" },
      },
    ),
    [
      Deno.cwd() + "/test/unit/test-files/d.ts",
    ],
  );
});

Deno.test("get local dependencies (real example)", async () => {
  Deno.chdir("./templates/new-project");
  const result = await getLocalDependencies({
    filename: "./root/_server.ts",
    truncateCommonPrefix: true,
    importMap: {
      "levo/": "../../mod/",
      "asserts": "https://deno.land/std@0.61.0/testing/asserts.ts",
      "environment": "./environment.ts",
    },
  });
  Deno.chdir("../..");
  assertEquals(result, [
    "/mod/levo-serve-response.ts",
    "/mod/levo-serve.ts",
    "/mod/levo-view.ts",
    "/src/camel-to-kebab.ts",
    "/src/css-types.ts",
    "/src/lispy-elements.ts",
    "/src/render-to-string.ts",
    "/src/virtual-node-events.ts",
    "/src/virtual-node.ts",
    "/templates/new-project/environment.ts",
    "/templates/new-project/root/_server.ts",
    "/templates/new-project/root/types.ts",
    "/templates/new-project/root/view.tsx",
  ]);
});
