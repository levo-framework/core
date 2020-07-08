import { runCommand } from "../src/run-command.ts";

const dirs = [
  "demo",
  "mod",
  "src",
  "test",
  "templates",
  "cli",
  "tools",
  "./test-levo-runtime/test.js",
];

const command = Deno.args.includes("--check") ? "deno fmt --check" : "deno fmt";

await dirs.reduce((promise, dir) => {
  return promise.then(async () => {
    const { output, error } = await runCommand(command + " " + dir);
    if (error) {
      console.error(output);
      Deno.exit(1);
    } else {
      console.log(output);
    }
  });
}, Promise.resolve());
