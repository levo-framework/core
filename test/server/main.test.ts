import { assertEquals } from "../../src/deps.ts";

const demoAppPath = new URL("../../demo/app.ts", import.meta.url).href;

const server = new Worker(demoAppPath, {
  type: "module",
  //@ts-ignore
  deno: true,
});

await new Promise((resolve) => setTimeout(resolve, 20000));

const tests: {
  name: string;
  fn: () => Promise<void>;
}[] = [
  {
    name:
      "serve webpage based on directory that has levo.client.ts (top-level)",
    fn: async () => {
      const result = await fetch("http://localhost:3000");
      assertEquals(result.headers.get("content-type"), "text/html");
      assertEquals(result.status, 200);
    },
  },
  {
    name:
      "serve webpage based on directory that has levo.client.ts (nested directory)",
    fn: async () => {
      const result = await fetch("http://localhost:3000/about");
      assertEquals(result.headers.get("content-type"), "text/html");
      assertEquals(result.status, 200);
    },
  },
  {
    name: "handle URL with trailing slash",
    fn: async () => {
      const result = await fetch("http://localhost:3000");
      assertEquals(result.headers.get("content-type"), "text/html");
      assertEquals(result.status, 200);
    },
  },
  {
    name: "handle URL with query params",
    fn: async () => {
      const result = await fetch("http://localhost:3000?title=spongebob");
      assertEquals((await result.text()).includes("spongebob"), true);
      assertEquals(result.headers.get("content-type"), "text/html");
      assertEquals(result.status, 200);
    },
  },
  {
    name: "handle path param wildcard",
    fn: async () => {
      const result1 = await fetch("http://localhost:3000/user/xxx");
      assertEquals((await result1.text()).includes("I am xxx"), true);

      const result2 = await fetch("http://localhost:3000/user/jojo");
      assertEquals((await result2.text()).includes("I am jojo"), true);
    },
  },
  {
    name: "serve asset under levo.assets",
    fn: async () => {
      const result = await fetch(
        "http://localhost:3000/levo.assets/index.css",
      );
      assertEquals(
        await result.text(),
        `
button {
  background-color: bisque;
  font-size: 24px;
}
      `.trim(),
      );
      assertEquals(result.headers.get("content-type"), "text/css");
      assertEquals(result.status, 200);
    },
  },
  {
    name: "serve compressed body whenever possible (br)",
    fn: async () => {
      const headers = new Headers();
      headers.set("Accept-Encoding", "br, gzip");
      const result = await fetch(
        "http://localhost:3000/levo.assets/index.css",
        {
          headers,
        },
      );
      assertEquals(result.headers.get("content-type"), "text/css");
      assertEquals(result.headers.get("levo-content-encoding"), "br");
      assertEquals(result.status, 200);
    },
  },
  {
    name: "serve compressed body whenever possible (gzip)",
    fn: async () => {
      const headers = new Headers();
      headers.set("Accept-Encoding", "gzip");
      const result = await fetch(
        "http://localhost:3000/levo.assets/index.css",
        {
          headers,
        },
      );
      assertEquals(result.headers.get("content-type"), "text/css");
      assertEquals(result.headers.get("levo-content-encoding"), "gzip");
      assertEquals(result.status, 200);
    },
  },
  {
    name: "return 404 when querying directory without levo.client.ts",
    fn: async () => {
      const headers = new Headers();
      headers.set("Accept-Encoding", "gzip");
      const result = await fetch("http://localhost:3000/dummy", {
        headers,
      });
      assertEquals(result.status, 404);
    },
  },
  {
    name: "redirection",
    fn: async () => {
      const result = await fetch("http://localhost:3000/banana?redirect=boom");
      assertEquals(
        await result.text(),
        `<script>window.location.href="boom"</script>`,
      );
    },
  },
  {
    name: "custom handlers",
    fn: async () => {
      const result = await fetch("http://localhost:3000/api/yo?x=5&y=6");
      assertEquals(await result.json(), { search: "?x=5&y=6" });
      assertEquals(result.headers.get("custom-lol"), "ha");
      assertEquals(result.status, 201);
    },
  },
  {
    name:
      "updating levo.server.ts should work when server is running in no-cache mode",
    fn: async () => {
      const result = await fetch("http://localhost:3000/banana");
      assertEquals((await result.text()).includes("i am banana"), true);
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      const path =
        new URL("../../demo/home/banana/levo.server.ts", import.meta.url)
          .pathname;
      const fileContent = decoder.decode(await Deno.readFile(path));
      await Deno.writeFile(
        path,
        encoder.encode(fileContent.replace(/banana/, "coconut")),
      );

      const result2 = await fetch("http://localhost:3000/banana");

      // reset the file
      await Deno.writeFile(path, encoder.encode(fileContent));
      assertEquals((await result2.text()).includes("i am coconut"), true);
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
