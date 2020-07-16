import { runCommand } from "./run-command.ts";

/**
 * Get the local dependencies of a Typescript file, not including remote dependencies 
 *  (e.g. files that are imported from https://deno.land).
 * 
 * The resulting paths will be relative to the current working directory.
 */
export const getLocalDependencies = async (
  filename: string,
): Promise<string[]> => {
  const { output, error } = await runCommand(
    `deno info --no-check ${filename}`,
  );
  if (error) {
    throw new Error(error);
  } else {
    return output.split("\n")
      .map((line) => line.split("file:///").slice(1).join("file:///"))
      .map((line) => line.slice(Deno.cwd().length))
      .filter(Boolean);
  }
};
