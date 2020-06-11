import { getDirectoryTree } from "../../src/get-directory-tree.ts";
import { assertEquals } from "../../src/deps.ts";

Deno.test({
  name: "new-project command",
  fn: async () => {
    const projectName = "hello";
    await Deno.run({
      cmd:
        `deno run --allow-all --unstable cli/mod.ts new-project ${projectName}`
          .split(" "),
      stdout: "piped",
      stderr: "piped",
    })
      .output();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const tree = await getDirectoryTree(
      `./${projectName}`,
      { ignoreFiles: [] },
    );
    assertEquals(tree, [
      [".gitignore"],
      [".levo.templates", [
        ["new-project", [
          [".gitignore"],
          ["README.md"],
          ["app.ts"],
          ["lib", [
            ["lib.deno_runtime.d.ts"],
          ]],
          ["root", [
            ["action.ts"],
            ["init.ts"],
            ["levo.assets", [
              ["favicon.ico"],
              ["favicon.svg"],
              ["index.css"],
            ]],
            ["levo.client.ts"],
            ["levo.server.ts"],
            ["model.ts"],
            ["robots.txt", [
              ["levo.server.ts"],
            ]],
            ["update.ts"],
            ["view.ts"],
          ]],
          ["tsconfig.json"],
        ]],
      ]],
      ["README.md"],
      ["app.ts"],
      ["lib", [
        ["lib.deno_runtime.d.ts"],
      ]],
      ["root", [
        ["action.ts"],
        ["init.ts"],
        ["levo.assets", [
          ["favicon.ico"],
          ["favicon.svg"],
          ["index.css"],
        ]],
        ["levo.client.ts"],
        ["levo.server.ts"],
        ["model.ts"],
        ["robots.txt", [
          ["levo.server.ts"],
        ]],
        ["update.ts"],
        ["view.ts"],
      ]],
      ["tsconfig.json"],
    ]);

    console.log(Deno.cwd())

    // Test if the server created with the templates work
    Deno.chdir(projectName)

    const server = new Worker(`./${projectName}/app.ts`, {
      type: "module",
      //@ts-ignore
      deno: true,
    });

    await new Promise(resolve => setTimeout(resolve, 3000))

    const response = await fetch('http://localhost:5000')
    assertEquals(response.status, 200)
    assertEquals(response.headers.get('content-type'), 'text/html')

    
    
    // Teardown
    server.terminate()
    Deno.chdir('..')
    await Deno.remove(projectName, { recursive: true });
  },
  sanitizeOps: false,
  sanitizeResources: false,
});
