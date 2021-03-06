import { getDirectoryTree } from "../../src/get-directory-tree.ts";
import { assertEquals, assert, path, exists } from "../../src/deps.ts";
import { runCommand } from "../../src/run-command.ts";

Deno.test({
  name: "new-project and new-page command",
  fn: async () => {
    const projectName = "hello";

    console.log("\nInstalling Levo CLI");
    const output = await runCommand(
      `deno install --allow-all --unstable --force --root . --name levo cli/mod.ts`,
    );
    console.log("output", output);

    assert(
      ((await runCommand(`which ./bin/levo`)).output).endsWith("./bin/levo"),
    );

    console.log("Creating new project using Levo CLI");
    const latestCommitHash = (await runCommand("git rev-parse HEAD")).output;
    const sourceDir = Deno.cwd();
    const { output: newProjectOutput } = await runCommand(
      `./bin/levo new-project ${projectName} --source=${sourceDir} --version=${latestCommitHash}`,
    );
    console.log(newProjectOutput);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const tree = getDirectoryTree(
      `./${projectName}`,
      { ignoreFiles: [] },
    );
    assertEquals(tree, [
      [".gitignore"],
      [".levo.templates", [
        ["new-project", [
          [".gitignore"],
          [".vscode", [
            ["settings.json"],
          ]],
          ["README.md"],
          ["app.ts"],
          ["environment.ts"],
          ["import_map.json"],
          ["lib", [
            ["lib.deno_runtime.d.ts"],
          ]],
          ["root", [
            ["_assets", [
              ["favicon.ico"],
              ["favicon.svg"],
              ["index.css"],
            ]],
            ["_client.ts"],
            ["_server.ts"],
            ["view.tsx"],
          ]],
          ["tools", [
            ["start-development.sh"],
            ["start-production.sh"],
          ]],
          ["tsconfig.json"],
        ]],
      ]],
      [".vscode", [
        ["settings.json"],
      ]],
      ["README.md"],
      ["app.ts"],
      ["environment.ts"],
      ["import_map.json"],
      ["lib", [
        ["lib.deno_runtime.d.ts"],
      ]],
      ["root", [
        ["_assets", [
          ["favicon.ico"],
          ["favicon.svg"],
          ["index.css"],
        ]],
        ["_client.ts"],
        ["_server.ts"],
        ["robots.txt", [
          ["_server.ts"],
        ]],
        ["view.tsx"],
      ]],
      ["tools", [
        ["start-development.sh"],
        ["start-production.sh"],
      ]],
      ["tsconfig.json"],
    ]);

    console.log("Verify import map");
    const importMapContent = new TextDecoder().decode(
      await Deno.readFile([projectName, "import_map.json"].join(path.SEP)),
    );
    assertEquals(
      importMapContent,
      `{
  "imports": {
    "levo/": "${sourceDir}/mod/",
    "asserts": "https://deno.land/std@0.61.0/testing/asserts.ts",
    "environment": "./environment.ts"
  }
}`,
    );
    const importMap = JSON.parse(importMapContent);
    assertEquals(importMap, {
      "imports": {
        "levo/": `${sourceDir}/mod/`,
        "asserts": "https://deno.land/std@0.61.0/testing/asserts.ts",
        "environment": "./environment.ts",
      },
    });

    console.log("Test if the server created with the templates work");
    Deno.chdir(projectName);
    const server = Deno.run({
      cmd: [`./tools/start-development.sh`],
    });
    Deno.chdir("..");

    await new Promise((resolve) => setTimeout(resolve, 25000));

    const response1 = await fetch("http://localhost:5000");
    assertEquals(response1.status, 200);
    assertEquals(response1.headers.get("content-type"), "text/html");

    console.log(`Test new-page command`);
    Deno.chdir(projectName);
    await runCommand(
      `../bin/levo new-page ./root/about`,
    );
    assertEquals(await exists("./root/about/robots.txt"), false);
    Deno.chdir("..");
    const response2 = await fetch("http://localhost:5000/about");
    assertEquals(response2.status, 200);
    assertEquals(response2.headers.get("content-type"), "text/html");

    console.log(`Test hot reload with new pages`);
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const aboutPagePath = `${projectName}/root/about/view.tsx`;
    const aboutPageContent = decoder.decode(await Deno.readFile(aboutPagePath));
    const replacedWord = Date.now().toString();
    await Deno.writeFile(
      aboutPagePath,
      encoder.encode(
        aboutPageContent.replace(/click me/gi, replacedWord),
      ),
    );

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const resultText = await (await fetch("http://localhost:5000/about"))
      .text();
    assert(resultText.includes(replacedWord));

    console.log(`Test new-page command with nested wildcard path`);
    Deno.chdir(projectName);
    await runCommand(
      `../bin/levo new-page ./root/_/profile`,
    );
    Deno.chdir("..");

    const response3 = await fetch("http://localhost:5000/john/profile");
    assertEquals(response3.status, 200);
    assertEquals(response3.headers.get("content-type"), "text/html");

    console.log("Tear down");
    console.log("Terminate server");

    server.kill(Deno.Signal.SIGTERM);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Delete created project folder");
    await Deno.remove(projectName, { recursive: true });

    console.log(`Uninstall Levo CLI`);
    await Deno.remove("./bin/levo");
  },
  sanitizeOps: false,
  sanitizeResources: false,
});
