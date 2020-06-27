/**
 * This test file is meant for testing the production version of Levo server
 */

import { assertEquals } from "../../src/deps.ts";

const process = Deno.run({
  cmd: "deno run --allow-all --unstable ./demo/app.ts --production".split(" "),
});

await new Promise((resolve) => setTimeout(resolve, 20000));

const tests: {
  name: string;
  fn: () => Promise<void>;
}[] = [
  {
    name: "async multiple requests",
    fn: async () => {
      const numberOfRequests = 100;
      const statuses: number[] = [];
      try {
        await Promise.all(
          new Array(numberOfRequests).fill(0).map(() =>
            fetch("http://localhost:3000/")
              .then((response) => statuses.push(response.status))
          ),
        );
      } catch (error) {
        console.error(error);
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
      assertEquals(statuses, new Array(numberOfRequests).fill(200));
      await new Promise((resolve) => setTimeout(resolve, 10000));
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
