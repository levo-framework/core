self.onmessage = async (event: {
  data: {
    paths?: string[];
  };
}): Promise<void> => {
  const { data: { paths } } = event;

  if (!paths) {
    throw new Error("`paths` is not defined.");
  }

  // Throttling is necessary because somehow more than
  // one events will be fired for each file changes
  let handled = false;
  const throttle = (event: Deno.FsEvent): void => {
    if (!handled) {
      handled = true;
      self.postMessage(event);
      setTimeout(() => {
        handled = false;
      }, 300);
    }
  };

  for await (const event of Deno.watchFs(paths)) {
    throttle(event);
  }
};
