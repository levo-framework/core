import { watchFile } from "../../src/watch-file.ts";
import { assertEquals } from "../deps.ts";

Deno.test({
  name: "watch file",
  fn: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    let counter = 0;
    const path = "./test/unit/test-files/x.ts";
    const handler = await watchFile({
      paths: [path],
      onChange: () => {
        counter++;
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const initialContent = await Deno.readFile(path);

    // Change the file x.ts
    await Deno.writeFile(path, new TextEncoder().encode("hello"));

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Expect onChange handlers is olny triggered once
    assertEquals(counter, 1);

    // Reset the file
    await Deno.writeFile(path, initialContent);

    await handler.stop();

    await new Promise((resolve) => setTimeout(resolve, 2000));
  },
});
