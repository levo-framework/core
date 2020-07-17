/**
 * Best effort method to extract dependencies from a Javascript/Typescript code using regular expressions.
 */
export const extractDependencies = (code: string): string[] => {
  return [
    ...(code.match(/from\s*["].*["]/g) ?? []),
    ...(code.match(/from\s*['].*[']/g) ?? []),
  ]
    .map((line) => {
      const result = line.slice(4).trim();
      return result.slice(1, result.length - 1);
    });
};
