import { parse } from "https://deno.land/std@0.53.0/flags/mod.ts";
import { exists, copy, path } from "../src/deps.ts";

const help = `
Levo CLI is a tool for generating boilerplates for Levo projects.

Available commands:

  new-project <project_name>
    - Creates a new Levo project under the directory <project_name>

  new-page <directory_name>
    - Creates a new Levo page under the directory <directory_name>
`;

const runCommand = async (command: string): Promise<string | undefined> => {
  console.log(`Executing "${command}"`);
  const process = Deno.run({
    cmd: command.split(" "),
    stdout: "piped",
    stderr: "piped",
  });
  const decoder = new TextDecoder();
  const [output, error] = await Promise.all(
    [
      process.output().then((output) => decoder.decode(output).trim()),
      process.stderrOutput().then((error) => decoder.decode(error).trim()),
    ],
  );
  if (error) {
    console.error(`"${command}" failed with the error below:`);
    console.error("[error]", error);
    return undefined;
  } else {
    console.log("[output]", output);
    return output;
  }
};

const main = async () => {
  const result = parse(Deno.args);
  if (result.help) {
    console.log(help);
  } else if (result._?.[0] === "new-project") {
    const projectName = result._?.[1]?.toString();
    if (!projectName) {
      console.error(`Missing argument <project_name>`);
      return Deno.exit(1);
    } else {
      const tempName = `tmp_${Date.now()}`;
      await runCommand(
        `git clone https://github.com/levo-framework/core ${tempName}`,
      );

      Deno.chdir(tempName);
      const latestTag = await runCommand("git describe --tags --abbrev=0");
      await runCommand(`git checkout ${latestTag}`);
      Deno.chdir("..");
      if (!latestTag) {
        console.error(`Failed to obtain latest version of Levo.`);
        return Deno.exit(1);
      }

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
};

if (import.meta.main) {
  await main();
}
