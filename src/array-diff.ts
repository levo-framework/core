/**
 * Return elements that are present in `left` but not in `right`
 */
export const arrayDiff = <T extends string | number | symbol>(
  left: T[],
  right: T[],
): T[] => {
  let cache: Partial<Record<T, boolean>> = {};
  const rightLength = right.length;
  for (let i = 0; i < rightLength; i++) {
    cache[right[i]] = true;
  }

  let diff: T[] = [];
  const leftLength = left.length;
  for (let i = 0; i < leftLength; i++) {
    const y = left[i];
    if (!cache[y]) {
      diff.push(y);
    }
  }
  return diff;
};
