import { parse } from "https://deno.land/std@0.53.0/flags/mod.ts";
import { exists, copy, path } from "../src/deps.ts";
import { runCommand } from "../src/run-command.ts";

const help = `
Levo CLI is a tool for generating boilerplates for Levo projects.

Available commands:

  new-project <PROJECT_NAME> --source=<SOURCE> --version=<VERSION>
    - Creates a new Levo project under the directory <PROJECT_NAME>
    - <VERSION> can be either commit hash or tag
        default value is the latest tag
    - <SOURCE> defines where to clone the Levo repository
        default value is "https://github.com/levo-framework/core"

  new-page <DIRNAME>
    - Creates a new Levo page under the directory <DIRNAME>
`;

const main = async (): Promise<void> => {
  const args = parse(Deno.args);
  if (Deno.args.length === 0 || args.help) {
    console.log(help);
  } else if (args._?.[0] === "new-project") {
    const projectName = args._?.[1]?.toString();
    if (!projectName) {
      console.error(`Missing argument <project_name>`);
      return Deno.exit(1);
    } else {
      const tempName = `tmp_${Date.now()}`;
      await runCommand(
        `git clone ${args.source ??
          "https://github.com/levo-framework/core"} ${tempName}`,
      );

      Deno.chdir(tempName);
      const { output: tag } = args.version
        ? { output: args.version as string }
        : await runCommand(
          "git describe --tags --abbrev=0",
        );
      await runCommand(`git checkout ${tag} --quiet`);
      Deno.chdir("..");
      if (!tag) {
        console.error(`Failed to obtain latest version of Levo.`);
        return Deno.exit(1);
      }

      console.log(`Using Levo ${tag}`);

      const importMapPath = [
        tempName,
        "templates",
        "new-project",
        "import_map.json",
      ].join(path.SEP);

      const oldImportMap: {
        "imports": Record<string, string>;
      } = JSON.parse(
        new TextDecoder().decode(
          await Deno.readFile(importMapPath),
        ),
      );

      const newImportMap = {
        imports: {
          ...oldImportMap.imports,
          "levo/": args.source
            ? `${args.source}/mod/`
            : `https://deno.land/x/levo@${tag}/mod/`,
        },
      };

      await Deno.writeFile(
        importMapPath,
        new TextEncoder().encode(JSON.stringify(newImportMap, null, 2)),
      );

      await copy(
        [tempName, "templates", "new-project"].join(path.SEP),
        projectName.toString(),
      );
      await copy(
        tempName + path.SEP + "templates",
        projectName + path.SEP + ".levo.templates",
      );

      // Remove robots.txt from new-page templates
      await Deno.remove(
        projectName + path.SEP + ".levo.templates/new-project/root/robots.txt",
        { recursive: true },
      );

      await Deno.remove(tempName, { recursive: true });
      console.log(`Levo app successfully created at ${projectName}`);
      console.log(`Run the following command to get started:\n`);
      console.log(`  cd ${projectName}`);
      console.log(`  ./tools/start-development.sh`);
    }
  } else if (args._?.[0] === "new-page") {
    const dirname = args._?.[1]?.toString();
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
};

if (import.meta.main) {
  await main();
}
