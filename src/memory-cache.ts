export class MemoryCache<T> {
  private cache: Record<string, T | undefined> = {};
  private maxNumberOfKeys: number;
  private retrievalFrequency: Record</* key */ string, /* frequency */ number> =
    {};
  constructor({ maxNumberOfKeys }: { maxNumberOfKeys: number }) {
    this.maxNumberOfKeys = maxNumberOfKeys;
  }

  /**
   * For testing purposes only
   */
  public _getCache(): Record<string, T | undefined> {
    return this.cache;
  }

  public _getRetrievalFrequency(): Record<string, number> {
    return this.retrievalFrequency;
  }

  public get(key: string): T | undefined {
    this.retrievalFrequency[key] = (this.retrievalFrequency[key] ?? 0) + 1;
    return this.cache[key];
  }

  public set(key: string, value: T): void {
    if (Object.keys(this.cache).length >= this.maxNumberOfKeys) {
      // Replace the key with the least retrieval frequency
      const [leastRetrievedKey] = Object.keys(this.cache).reduce(
        ([minKey, minFrequency], key) => {
          const frequency = this.retrievalFrequency[key] ?? 0;
          if (frequency < minFrequency) {
            return [key, frequency];
          } else {
            return [minKey, minFrequency];
          }
        },
        ["", Number.MAX_SAFE_INTEGER],
      );
      if (leastRetrievedKey) {
        delete this.cache[leastRetrievedKey];
      }
      this.cache[key] = value;
    } else {
      this.cache[key] = value;
    }
  }
}
