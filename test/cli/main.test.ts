import { getDirectoryTree } from "../../src/get-directory-tree.ts";
import { assertEquals, assert } from "../../src/deps.ts";

Deno.test({
  name: "new-project and new-page command",
  fn: async () => {
    const projectName = "hello";
    const runCommand = (command: string) => {
      const process = Deno.run({
        cmd: command.split(" "),
        stdout: "piped",
        stderr: "piped",
      });
      const decoder = new TextDecoder();
      return Promise.all([process.output(), process.stderrOutput()])
        .then(([output, err]) => {
          if (err.length > 0) {
            return decoder.decode(err);
          } else {
            return decoder.decode(output).trim();
          }
        })
        .then((result) => {
          console.log(result);
          return result;
        });
    };

    console.log("\nInstalling Levo CLI");
    await runCommand(
      `deno install --allow-all --unstable --force --name levo cli/mod.ts`,
    );

    assert((await runCommand(`which levo`)).endsWith('levo'))

    console.log("Creating new project using Levo CLI");
    await runCommand(`levo new-project ${projectName}`);

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

    console.log("Test if the server created with the templates work");
    Deno.chdir(projectName);
    const server = new Worker(`./${projectName}/app.ts`, {
      type: "module",
      //@ts-ignore
      deno: true,
    });

    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch("http://localhost:5000");
    assertEquals(response.status, 200);
    assertEquals(response.headers.get("content-type"), "text/html");

    // Test new-page command
    // await runCommand(
    //   `deno run --allow-all --unstable cli/mod.ts new-project ${projectName}`,
    // );

    console.log("Tear down");
    console.log(`Uninstall Levo CLI`);
    const levoPath = await runCommand(`which levo`);
    console.log("levoPath", levoPath);
    await Deno.remove(levoPath);

    console.log("Terminate server");
    server.terminate();

    console.log("Delete created project folder");
    Deno.chdir("..");
    await Deno.remove(projectName, { recursive: true });
  },
  sanitizeOps: false,
  sanitizeResources: false,
});
