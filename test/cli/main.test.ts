import { getDirectoryTree } from "../../src/get-directory-tree.ts";
import { assertEquals, assert } from "../../src/deps.ts";

Deno.test({
  name: "new-project and new-page command",
  fn: async () => {
    const projectName = "hello";
    const runCommand = (command: string) => {
      const process = Deno.run({
        cmd: command.split(" ").filter(Boolean),
        stdout: "piped",
        stderr: "piped",
      });
      const decoder = new TextDecoder();
      return Promise.all([process.output(), process.stderrOutput()])
        .then(([output, err]) => {
          if (err.length > 0) {
            const error = decoder.decode(err);
            console.error(error);
            return error;
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
    const output = await runCommand(
      `deno install --allow-all --unstable --force --root . --name levo cli/mod.ts`,
    );
    console.log("output", output);

    assert((await runCommand(`which ./bin/levo`)).endsWith("./bin/levo"));

    console.log("Creating new project using Levo CLI");
    await runCommand(`./bin/levo new-project ${projectName}`);

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

    const response1 = await fetch("http://localhost:5000");
    assertEquals(response1.status, 200);
    assertEquals(response1.headers.get("content-type"), "text/html");

    console.log(`Test new-page command`);
    await runCommand(
      `../bin/levo new-page ./root/about`,
    );
    const response2 = await fetch("http://localhost:5000/about");
    assertEquals(response2.status, 200);
    assertEquals(response2.headers.get("content-type"), "text/html");

    console.log(`Test new-page command with nested wildcard path`);
    await runCommand(
      `../bin/levo new-page ./root/_/profile`,
    );
    const response3 = await fetch("http://localhost:5000/john/profile");
    assertEquals(response3.status, 200);
    assertEquals(response3.headers.get("content-type"), "text/html");

    console.log("Tear down");
    console.log("Terminate server");
    server.terminate();

    Deno.chdir("..");

    console.log("Delete created project folder");
    await Deno.remove(projectName, { recursive: true });

    console.log(`Uninstall Levo CLI`);
    await Deno.remove("./bin/levo");
  },
  sanitizeOps: false,
  sanitizeResources: false,
});
