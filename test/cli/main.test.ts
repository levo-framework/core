import { getDirectoryTree } from "../../src/get-directory-tree.ts";
import { assertEquals, assert, path } from "../../src/deps.ts";

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
          ["README.md"],
          ["app.ts"],
          ["lib", [
            ["lib.deno_runtime.d.ts"],
          ]],
          ["root", [
            ["levo.assets", [
              ["favicon.ico"],
              ["favicon.svg"],
              ["index.css"],
            ]],
            ["levo.client.ts"],
            ["levo.server.ts"],
            ["robots.txt", [
              ["levo.server.ts"],
            ]],
            ["types.ts"],
            ["update.test.ts"],
            ["update.ts"],
            ["view.tsx"],
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
        ["levo.assets", [
          ["favicon.ico"],
          ["favicon.svg"],
          ["index.css"],
        ]],
        ["levo.client.ts"],
        ["levo.server.ts"],
        ["robots.txt", [
          ["levo.server.ts"],
        ]],
        ["types.ts"],
        ["update.test.ts"],
        ["update.ts"],
        ["view.tsx"],
      ]],
      ["tsconfig.json"],
    ]);

    console.log("Make sure the template files are using specific imports");
    const assertUsingSpecificImport = async (
      dirname: string,
    ): Promise<void> => {
      return Promise.all(
        Array.from(Deno.readDirSync(dirname)).map(async (dir) => {
          if (dir.isFile) {
            const filename = dirname + path.SEP + dir.name;
            const lines = new TextDecoder().decode(
              await Deno.readFile(filename),
            )
              .split("\n")
              .filter((line) => line.includes("/mod/levo-"));
            if (lines.length > 0) {
              console.log(`Validating file '${filename}'`);
              lines.forEach((line) => {
                console.log(`Validating line "${line}"`);
                assert(/https:\/\/deno.land\/x\/levo@v\d\.\d\.\d/.test(line));
              });
            }
            return Promise.resolve();
          } else {
            return assertUsingSpecificImport(dirname + path.SEP + dir.name);
          }
        }),
      ).then(() => {});
    };
    await assertUsingSpecificImport(projectName);

    console.log("Test if the server created with the templates work");
    const server = new Worker(
      new URL(`../.././${projectName}/app.ts`, import.meta.url).href,
      {
        type: "module",
        //@ts-ignore
        deno: true,
      },
    );

    await new Promise((resolve) => setTimeout(resolve, 20000));

    const response1 = await fetch("http://localhost:5000");
    assertEquals(response1.status, 200);
    assertEquals(response1.headers.get("content-type"), "text/html");

    console.log(`Test new-page command`);
    Deno.chdir(projectName);
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
    Deno.chdir("..");
    const response3 = await fetch("http://localhost:5000/john/profile");
    assertEquals(response3.status, 200);
    assertEquals(response3.headers.get("content-type"), "text/html");

    console.log("Tear down");
    console.log("Terminate server");
    server.terminate();

    console.log("Delete created project folder");
    await Deno.remove(projectName, { recursive: true });

    console.log(`Uninstall Levo CLI`);
    await Deno.remove("./bin/levo");
  },
  sanitizeOps: false,
  sanitizeResources: false,
});
