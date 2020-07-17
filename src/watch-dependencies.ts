import { getLocalDependencies } from "./get-local-dependencies.ts";
import { watchFile } from "./watch-file.ts";

const handlers: Record</*filename*/ string, WatchDependenciesHandler> = {};

type WatchDependenciesHandler = {
  stop?: () => Promise<void>;
};

/**
 * Watch for changes of the Typescript file and its dependencies.
 */
export const watchDependencies = async (
  { filename, onChange, importMap }: {
    filename: string;
    onChange: (event: Deno.FsEvent) => void;
    importMap?: Record<string, string>;
  },
): Promise<WatchDependenciesHandler> => {
  const watch = async () => {
    await handlers[filename]?.stop?.();
    const dependencies = await getLocalDependencies({ filename, importMap });
    console.log("Watching dependencies of " + filename);
    handlers[filename] = await watchFile({
      paths: dependencies,
      onChange: async (event) => {
        onChange(event);
        await watch();
      },
    });
  };
  await watch();
  return {
    stop: async () => {
      await handlers[filename]?.stop?.();
    },
  };
};
