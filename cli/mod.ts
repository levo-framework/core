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
    const response = await fetch(
      `https://api.github.com/repos/levo-framework/core/git/refs/tags`,
    ).then((response) =>
      response.json() as Promise<
        {
          ref: string;
          object?: {
            sha: string;
          };
        }[]
      >
    );

    const [, , latestTag] = response.sort((b, a) =>
      a.ref.localeCompare(b.ref)
    )[0]?.ref.split("/");
    const tempName = `tmp_${Date.now()}`;
    const command =
      `git clone --branch ${latestTag} --depth 1 https://github.com/levo-framework/core ${tempName}`;
    console.log(command);
    const output = await Deno.run({
      cmd: command.split(" "),
      stdout: "piped",
      stderr: "piped",
    })
      .output();

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
            const updatedContent = content
              .replace(
                /https:\/\/deno\.land\/x\/levo\//g,
                `https://deno.land/x/levo@${latestTag}/`,
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
    await copy(".levo.templates/new-project/root", dirname);
  }
} else {
  console.error(`Unknown command '${Deno.args.join(" ")}'`);
  console.log(`Type 'levo --help' for more information.`);
}
