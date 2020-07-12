import { assertEquals } from "../../src/deps.ts";

const process = Deno.run({
  cmd: [
    "deno",
    "run",
    "--allow-all",
    "--unstable",
    "--importmap=./templates/new-project/import_map.json",
    "templates/new-project/app.ts",
  ],
});

await new Promise((resolve) => setTimeout(resolve, 20000));

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
