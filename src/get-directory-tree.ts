import { DirectoryTree } from "./resolve-url.ts";
import { path } from "./deps.ts";

export const getDirectoryTree = (pathname: string): DirectoryTree[] => {
  const dir = Array.from(Deno.readDirSync(pathname));
  return dir.map<DirectoryTree>((dir) => {
    if (dir.isFile) {
      return [dir.name];
    } else {
      return [dir.name, getDirectoryTree(pathname + path.SEP + dir.name)];
    }
  });
};
