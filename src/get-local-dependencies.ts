import { exists, path } from "./deps.ts";
import { extractDependencies } from "./extract-dependencies.ts";

/**
 * Get the local dependencies of a Typescript file, not including remote dependencies 
 *  (e.g. files that are imported from https://deno.land).
 * 
 * The resulting paths will be relative to the current working directory.
 */
export const getLocalDependencies = async (
  filename: string,
): Promise<string[]> => {
  const currentDirectory = Deno.cwd();
  return (await _getLocalDependencies(filename, currentDirectory)).map(
    (line) => {
      return line.slice(currentDirectory.length + 1);
    },
  );
};

const _getLocalDependencies = async (
  filename: string,
  currentDirectory: string,
): Promise<string[]> => {
  const absolutePath = filename.startsWith(path.SEP)
    ? filename
    : currentDirectory + path.SEP + filename;
  if (!(await exists(absolutePath))) {
    console.error(`WARNING: Cannot find file "${absolutePath}"`);
    return [];
  } else {
    const content = new TextDecoder().decode(await Deno.readFile(absolutePath));
    const realPath = await Deno.realPath(absolutePath);
    const parentDirectory = realPath.substring(
      0,
      realPath.lastIndexOf(path.SEP) + 1,
    );
    return Promise.all(
      extractDependencies(content).map((dependency) => {
        return _getLocalDependencies(dependency, parentDirectory);
      }),
    )
      .then((result) => [
        realPath,
        ...result.flat(),
      ]);
  }
};
