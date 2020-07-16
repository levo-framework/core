export const watchFile = async (
  { paths, onChange }: {
    paths: string[];
    onChange: (event: Deno.FsEvent) => void;
  },
): Promise<void> => {
  let handled = false;
  const throttle = (event: Deno.FsEvent): void => {
    if (!handled) {
      handled = true;
      onChange(event);
      setTimeout(() => {
        handled = false;
      }, 300);
    }
  };
  // Throttling is necessary because somehow more than
  // one events will be fired for each file changes

  for await (const event of Deno.watchFs(paths)) {
    throttle(event);
  }
};
