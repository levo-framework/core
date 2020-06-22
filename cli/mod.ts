import { parse } from "https://deno.land/std@0.53.0/flags/mod.ts";
import { exists, copy, path } from "../src/deps.ts";

const result = parse(Deno.args);
const help = `
Levo CLI is a tool for generating boilerplates for Levo projects.

Available commands:

  new-project <project_name>
    - Creates a new Levo project under the directory <project_name>

  new-page <directory_name>
    - Creates a new Levo page under the directory <directory_name>
`;
if (result.help) {
  console.log(help);
} else if (result._?.[0] === "new-project") {
  const projectName = result._?.[1]?.toString();
  if (!projectName) {
    console.error(`Missing argument <project_name>`);
  } else {
    const tempName = `tmp_${Date.now()}`;
    const command =
      `git clone --depth 1 https://github.com/levo-framework/core ${tempName}`;
    console.log(command);
    const output = await Deno.run({
      cmd: command.split(" "),
      stdout: "piped",
      stderr: "piped",
    })
      .output();

    Deno.chdir(tempName);
    const latestTag = new TextDecoder().decode(
      await Deno.run({
        cmd: "git describe --tags".split(" "),
        stdout: "piped",
        stderr: "piped",
      })
        .output(),
    ).trim();
    console.log(
      await Deno.run({
        cmd: `git checkout ${latestTag}`.split(" "),
        stdout: "piped",
        stderr: "piped",
      })
        .output(),
    );
    Deno.chdir("..");

    console.log(new TextDecoder().decode(output));
    console.log(`Using Levo ${latestTag}`);

    // specify specific version for each file in the templates that import Levo modules
    const specifyVersion = async (pathname: string): Promise<void> => {
      return Promise.all(
        Array.from(Deno.readDirSync(pathname)).map(async (dir) => {
          if (dir.isFile) {
            const filename = pathname + path.SEP + dir.name;
            const content = new TextDecoder().decode(
              await Deno.readFile(filename),
            );
            const updatedContent = content.replace(
              /".*?mod\//g,
              `"https://deno.land/x/levo@${latestTag}/mod/`,
            );
            return await Deno.writeFile(
              filename,
              new TextEncoder().encode(updatedContent),
            );
          } else {
            return specifyVersion(pathname + path.SEP + dir.name);
          }
        }),
      ).then(() => {});
    };

    await specifyVersion(tempName + path.SEP + "templates");

    await copy(
      tempName + path.SEP + "templates/new-project",
      projectName.toString(),
    );
    await copy(
      tempName + path.SEP + "templates",
      projectName + path.SEP + ".levo.templates",
    );
    await Deno.remove(tempName, { recursive: true });
    console.log(`Levo app successfully created at ${projectName}`);
    console.log(`Run the following command to get started:\n`);
    console.log(`  cd ${projectName}`);
    console.log(`  deno run --allow-all --unstable app.ts`);
  }
} else if (result._?.[0] === "new-page") {
  const dirname = result._?.[1]?.toString();
  if (!dirname) {
    console.error(`Missing argument <directory_name>`);
  } else if (!await exists(".levo.templates")) {
    console.error(
      'Cannot find directory ".levo.templates", make sure you are running this command in the project root.',
    );
  } else if ((await exists(dirname))) {
    console.error(
      `Cannot create a new page at "${dirname}" as it already exists.`,
    );
  } else {
    console.log(`Creating a new page at ${dirname}`);
    await copy(".levo.templates/new-project/root", dirname);
  }
} else {
  console.error(`Unknown command '${Deno.args.join(" ")}'`);
  console.log(`Type 'levo --help' for more information.`);
}
