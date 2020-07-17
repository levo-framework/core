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
): Promise<{
  stop?: () => Promise<void>;
}> => {
  const handler: { stop?: () => Promise<void> } = {};
  const watch = async () => {
    const dependencies = await getLocalDependencies(filename);
    const newHandler = await watchFile({
      paths: dependencies,
      onChange: async (event) => {
        await handler.stop?.();
        onChange(event);
        await watch();
      },
    });
    handler.stop = newHandler.stop;
  };
  await watch();
  return handler;
};
