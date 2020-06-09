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
  const projectName = result._?.[1];
  if (!projectName) {
    console.error(`Missing argument <project_name>`);
  } else {
    const response = await fetch(
      "https://api.github.com/repos/levo-framework/core/git/refs/tags",
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
    await copy(
      tempName + path.SEP + "templates/new-project",
      projectName.toString(),
    );
    await copy(
      tempName + path.SEP + "templates",
      projectName + path.SEP + ".levo.templates",
    );
    await Deno.remove(tempName, { recursive: true });
  }
} else if (result._?.[0] === "new-page") {
  const dirname = result._?.[1];
  if (!dirname) {
    console.error(`Missing argument <directory_name>`);
  } else if (typeof dirname !== "string") {
    console.error(`Type <directory_name> should be string, not number`);
  } else {
    if (!(await exists(dirname))) {
      await Deno.mkdir(dirname, { recursive: true });
    }
  }
} else {
  console.error(`Unknown command '${Deno.args.join(" ")}'`);
  console.log(`Type 'levo --help' for more information.`);
}
