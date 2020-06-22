import { runCommand } from "../src/run-command.ts";
import { minify } from "../src/minify.ts";

const main = async () => {
  const { output: bundled } = await runCommand(
    "deno bundle --config levo-runtime.tsconfig.json src/levo-runtime.ts",
  );
  if (bundled) {
    const { code, error } = minify(bundled);
    if (error) {
      console.error(error);
      return Deno.exit(1);
    } else if (code.includes("`")) {
      console.error(`Minified bundle of levo-runtime.ts contains backtick!`);
      Deno.exit(1);
    } else {
      const sanitizedCode = code.replace(/\\n/g, " ");
      await Deno.writeFile(
        "./levo-runtime-raw.ts",
        new TextEncoder()
          .encode(`export const levoRuntimeCode = \`${sanitizedCode}\``),
      );
      await runCommand("deno fmt levo-runtime-raw.ts");
    }
  }
};

if (import.meta.main) {
  await main();
}
