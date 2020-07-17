import { assertEquals } from "../deps.ts";
import { watchDependencies } from "../../src/watch-dependencies.ts";

Deno.test({
  name: "watch dependencies",
  sanitizeOps: false,
  sanitizeResources: false,
  fn: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const aPath = "./test/unit/test-files/a.ts";
    const bPath = "./test/unit/test-files/b.ts";
    const cPath = "./test/unit/test-files/c.ts";
    const xPath = "./test/unit/test-files/x.ts";

    const events: Deno.FsEvent[] = [];

    // Watch xPath
    const handler = await watchDependencies(
      {
        filename: xPath,
        onChange: (event) => {
          events.push(event);
        },
      },
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const read = async (filename: string): Promise<string> => {
      return new TextDecoder().decode(await Deno.readFile(filename));
    };
    const write = async (filename: string, content: string): Promise<void> => {
      return Deno.writeFile(filename, new TextEncoder().encode(content));
    };

    const aContent = await read(aPath);
    const bContent = await read(bPath);
    const cContent = await read(cPath);
    const xContent = await read(xPath);

    // Change file x.ts to include a.ts
    await write(xPath, `import * as a from "./a.ts"`);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Change file b.ts
    await write(bPath, `export * from './c.ts'`);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Change file c.ts
    await write(cPath, `export const c = 3`);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    assertEquals(events.map((event) => event.paths), [
      [Deno.cwd() + "/test/unit/test-files/x.ts"],
      [Deno.cwd() + "/test/unit/test-files/b.ts"],
      [Deno.cwd() + "/test/unit/test-files/c.ts"],
    ]);

    // Reset the files
    await write(aPath, aContent);
    await write(bPath, bContent);
    await write(cPath, cContent);
    await write(xPath, xContent);

    await handler.stop?.();

    await new Promise((resolve) => setTimeout(resolve, 2000));
  },
});
