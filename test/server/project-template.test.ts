import { assert, assertEquals } from "../../src/deps.ts";

Deno.chdir("./templates/new-project/");
const process = Deno.run({
  cmd: ["./tools/start-development.sh"],
});

await new Promise((resolve) => setTimeout(resolve, 25000));

const tests: {
  name: string;
  fn: () => Promise<void>;
}[] = [
  {
    name: "root page should work",
    fn: async () => {
      const result = await fetch("http://localhost:5000");
      assertEquals(result.headers.get("content-type"), "text/html");
      assertEquals(result.status, 200);
    },
  },
  {
    name: "template should have default robots.txt",
    fn: async () => {
      const result = await fetch("http://localhost:5000/robots.txt");
      assertEquals(
        (await result.text()).split("\n"),
        ["User-agent: *", "Allow: /"],
      );
      assertEquals(result.status, 200);
    },
  },
  {
    name: "hot reload should work",
    fn: async () => {
      const text1 = await (await fetch("http://localhost:5000")).text();
      assert(!text1.includes("spongebob"));

      // Update the content of view.tsx
      const path = "./root/view.tsx";
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      const originalContent = decoder.decode(await Deno.readFile(path));

      await Deno.writeFile(
        path,
        encoder.encode(originalContent.replace("Change to green", "spongebob")),
      );

      await new Promise((resolve) => setTimeout(resolve, 5000));

      const text2 = await (await fetch("http://localhost:5000")).text();
      assert(text2.includes("spongebob"));

      // Reset the file
      await Deno.writeFile(path, encoder.encode(originalContent));
    },
  },
];

let numberOfRanTest = 0;
const done = () => {
  numberOfRanTest++;
  if (numberOfRanTest === tests.length) {
    const SIGTERM = 15;
    process.kill(SIGTERM);
  }
};

tests.forEach((test) => {
  Deno.test({
    name: test.name,
    fn: () => test.fn().then(done),
    sanitizeOps: false,
    sanitizeResources: false,
  });
});
