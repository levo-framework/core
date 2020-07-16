import { getLocalDependencies } from "./get-local-dependencies.ts";
import { watchFile } from "./watch-file.ts";

/**
 * Watch for changes of the Typescript file and its dependencies.
 */
export const watchDependencies = async (
  { filename, onChange }: {
    filename: string;
    onChange: (event: Deno.FsEvent) => void;
  },
): Promise<void> => {
  return watchFile({
    paths: await getLocalDependencies(filename),
    onChange,
  });
};
