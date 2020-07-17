export const resolveImportMap = (
  importMap: Record<string, string>,
  path: string,
): string | undefined => {
  const keys = Object.keys(importMap);
  const matchingKey = keys.find((key) => path.startsWith(key));
  if (!matchingKey) {
    return undefined;
  } else {
    return importMap[matchingKey] + path.slice(matchingKey.length);
  }
};
