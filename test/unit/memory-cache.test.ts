import { MemoryCache } from "../../src/memory-cache.ts";
import { assertEquals } from "../deps.ts";

Deno.test("memory cache (case 1)", () => {
  const memoryCache = new MemoryCache<number>({ maxNumberOfKeys: 3 });
  memoryCache.set("a", 0);
  assertEquals(memoryCache._getCache(), { "a": 0 });
  memoryCache.set("b", 1);
  assertEquals(memoryCache._getCache(), { "a": 0, "b": 1 });
  memoryCache.set("c", 2);
  assertEquals(memoryCache._getCache(), { "a": 0, "b": 1, "c": 2 });

  assertEquals(memoryCache.get("a"), 0);
  assertEquals(memoryCache.get("b"), 1);
  assertEquals(memoryCache.get("c"), 2);

  // Retrieve C another two times
  memoryCache.get("c");
  memoryCache.get("c");

  // Retrieve A another one time
  memoryCache.get("a");

  assertEquals(memoryCache._getRetrievalFrequency(), {
    "a": 2,
    "b": 1,
    "c": 3,
  });

  // Set "d", expect "b" is replaced, since "b" has the least retrieval frequency
  memoryCache.set("d", 3);
  assertEquals(memoryCache._getCache(), { "a": 0, "c": 2, "d": 3 });
  assertEquals(memoryCache.get("b"), undefined);

  // Retrieve "b", although "b" is gone, expect it's frequency to be still counted
  const bFreq1 = memoryCache._getRetrievalFrequency()["b"];
  memoryCache.get("b");
  const bFreq2 = memoryCache._getRetrievalFrequency()["b"];
  assertEquals(bFreq2 - bFreq1, 1);
});
