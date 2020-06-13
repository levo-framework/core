import { assertEquals } from "../../src/deps.ts";

const server = new Worker(
  new URL("./../../templates/new-project/app.ts", import.meta.url).href,
  {
    type: "module",
    //@ts-ignore
    deno: true,
  },
);

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
];

let numberOfRanTest = 0;
const done = () => {
  numberOfRanTest++;
  if (numberOfRanTest === tests.length) {
    server.terminate();
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
