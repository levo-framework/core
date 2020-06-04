export const resolveUrl = (
  tree: DirectoryTree[],
  url: string,
): string | undefined => {
  const tokens = url.split("/").filter((x) => x.length > 0);
  const result = tokens.map((token, index): string | undefined => {
    const paths = nthGeneration({ tree, generation: index });
    return paths.find((path) => path === token) ??
      paths.find((path) => path === "_");
  });
  return result.some((x) => !x) ? undefined : result.join("/");
};

const nthGeneration = ({
  tree,
  generation,
}: {
  tree: DirectoryTree[];
  generation: number;
}): string[] => {
  if (generation === 0) {
    return tree.map(([path]) => path);
  } else {
    return nthGeneration({
      tree: tree.flatMap(([, children]) => children ?? []),
      generation: generation - 1,
    });
  }
};

export type DirectoryTree = [string, DirectoryTree[]?];
