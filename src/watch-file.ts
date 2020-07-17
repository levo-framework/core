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
  const worker = new Worker(new URL("./watcher.ts", import.meta.url).href, {
    type: "module",
    deno: true,
  });
  worker.postMessage({
    paths: (await Promise.all(paths.map(async (path) => {
      if (await exists(path)) {
        return path;
      } else {
        console.warn(`(watch-file.ts) Cannot find path: ${path}`);
        return undefined;
      }
    })))
      .filter((path): path is string => path !== undefined),
  });
  worker.onmessage = (event) => {
    onChange(event.data as Deno.FsEvent);
  };
  return {
    stop: async () => {
      worker.terminate();
    },
  };
};
