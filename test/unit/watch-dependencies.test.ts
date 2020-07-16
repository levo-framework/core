import { assertEquals } from "../deps.ts";
import { watchDependencies } from "../../src/watch-dependencies.ts";

Deno.test({
  name: "watch dependencies",
  fn: async () => {
    const aPath = "./test/unit/test-files/a.ts";
    const bPath = "./test/unit/test-files/b.ts";
    const cPath = "./test/unit/test-files/c.ts";

    const events: Deno.FsEvent[] = [];
    watchDependencies(
      {
        filename: "./test/unit/test-files/a.ts",
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

    // Change file a.ts
    await write(aPath, Date.now().toString());
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Change file b.ts
    await write(bPath, Date.now().toString());
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Change file c.ts
    await write(cPath, Date.now().toString());
    await new Promise((resolve) => setTimeout(resolve, 1000));

    assertEquals(events.map((event) => event.paths), [
      [Deno.cwd() + "/test/unit/test-files/a.ts"],
      [Deno.cwd() + "/test/unit/test-files/b.ts"],
      [Deno.cwd() + "/test/unit/test-files/c.ts"],
    ]);

    // Reset the files
    await write(aPath, aContent);
    await write(bPath, bContent);
    await write(cPath, cContent);

    Deno.exit();
  },
  sanitizeOps: false,
  sanitizeResources: false,
});
