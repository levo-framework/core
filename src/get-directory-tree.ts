import { DirectoryTree } from "./resolve-url.ts";
import { path } from "./deps.ts";

export const getDirectoryTree = (pathname: string, options?: {
  ignoreFiles?: string[];
}): DirectoryTree[] => {
  const dir = Array.from(Deno.readDirSync(pathname));
  return dir.flatMap<DirectoryTree>((dir) => {
    if (dir.isFile) {
      return options?.ignoreFiles?.includes(dir.name) ? [] : [[dir.name]];
    } else {
      return [[dir.name, getDirectoryTree(pathname + path.SEP + dir.name)]];
    }
  });
};
