import { exists } from "./deps.ts";

export const watchFile = async (
  {
    paths,
    onChange,
    log,
  }: {
    paths: string[];
    onChange: (event: Deno.FsEvent) => void;
    log?: boolean;
  },
): Promise<{
  stop: () => Promise<void>;
}> => {
  if (log) {
    console.log("(watch-file.ts) Watching: " + paths.join(", "));
  }
  const sanitisedPaths = (await Promise.all(paths.map(async (path) => {
    if (await exists(path)) {
      return path;
    } else {
      console.warn(`(watch-file.ts) Cannot find dependency "${path}"`);
      return undefined;
    }
  })))
    .filter((path): path is string => path !== undefined);

  // Throttling is necessary because somehow more than
  // one events will be fired for each file changes
  let handled = false;
  const throttle = (event: Deno.FsEvent): void => {
    if (!handled) {
      handled = true;
      onChange(event);
      setTimeout(() => {
        handled = false;
      }, 1);
    }
  };

  const iterator = Deno.watchFs(sanitisedPaths);
  setTimeout(async () => {
    try {
      for await (const event of iterator) {
        throttle(event);
      }
    } // eslint-disable-next-line no-empty
    catch {
      // TODO: remove this try-catch block after the `return` on
      //       Deno.watchFs is fixed by nayeerm
    }
  }, 100);

  return {
    stop: async () => {
      try {
        await iterator.return?.();
      } catch (error) {
        console.error(error);
      }
    },
  };
};
