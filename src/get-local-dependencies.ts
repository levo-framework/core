import { exists, path } from "./deps.ts";
import { extractDependencies } from "./extract-dependencies.ts";
import { resolveImportMap } from "./resolve-import-map.ts";

/**
 * Get the local dependencies of a Typescript file, not including remote dependencies 
 *  (e.g. files that are imported from https://deno.land).
 * 
 * The resulting paths will be relative to the current working directory.
 */
export const getLocalDependencies = async (
  { filename, importMap, truncateCommonPrefix }: {
    filename: string;
    importMap?: Record<string, string>;

    /**
     * For testing purpose
     */
    truncateCommonPrefix?: boolean;
  },
): Promise<string[]> => {
  const currentDirectory = Deno.cwd();
  const dependencies = (await _getLocalDependencies(
    { filename, currentDirectory, rootDirectory: currentDirectory, importMap },
  ))
    .filter(Boolean)
    .filter((line) => !line.startsWith("http"))
    .filter((x, i, xs) => i === xs.indexOf(x));

  const commonPrefix = commonParentDirectory(dependencies);
  return dependencies.map((line) =>
    truncateCommonPrefix ? line.slice(commonPrefix.length) : line
  ).sort();
};

const commonParentDirectory = (directories: string[]): string => {
  const [minRow, ...rows] = directories.map((dir) => dir.split(path.SEP)).sort((
    a,
    b,
  ) => a.length - b.length);
  const result: string[] = [];
  for (let i = 0; i < (minRow.length ?? 0); i++) {
    if (rows.every((row) => row[i] === minRow[i])) {
      result.push(minRow[i]);
    } else {
      return result.join(path.SEP);
    }
  }
  return result.join(path.SEP);
};

const _getLocalDependencies = async (
  { filename, currentDirectory, rootDirectory, importMap }: {
    filename: string;
    currentDirectory: string;
    rootDirectory: string;
    importMap: Record<string, string> | undefined;
  },
): Promise<string[]> => {
  const absolutePath = filename.startsWith(path.SEP)
    ? filename
    : filename.startsWith("." + path.SEP) ||
        filename.startsWith(".." + path.SEP)
    ? currentDirectory + (currentDirectory.endsWith(path.SEP) ? "" : path.SEP) +
      filename
    : resolveImportMap(importMap ?? {}, filename);

  if (!absolutePath) {
    console.error(
      `(get-local-dependencies.ts) WARNING: Cannot resolve path for "${filename}"`,
    );
    return [];
  }

  if (!(await exists(absolutePath))) {
    console.error(
      `(get-local-dependencies.ts) WARNING: Cannot find file "${absolutePath}"`,
    );
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
        return _getLocalDependencies(
          {
            filename: dependency,
            currentDirectory: parentDirectory,
            rootDirectory,
            importMap,
          },
        );
      }),
    )
      .then((result) => [
        realPath,
        ...result.flat(),
      ]);
  }
};
