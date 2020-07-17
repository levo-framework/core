import { assertEquals, assert } from "../../src/deps.ts";

const server = await Deno.run({
  cmd: "deno run --allow-all --unstable demo/app.ts".split(" "),
});

await new Promise((resolve) => setTimeout(resolve, 25000));

const tests: {
  name: string;
  fn: () => Promise<void>;
}[] = [
  {
    name: "serve webpage based on directory that has _client.ts (top-level)",
    fn: async () => {
      const result = await fetch("http://localhost:3000");
      assertEquals(result.headers.get("content-type"), "text/html");
      assertEquals(result.status, 200);
    },
  },
  {
    name:
      "serve webpage based on directory that has _client.ts (nested directory)",
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
      assert((await result.text()).includes("spongebob"));
      assertEquals(result.headers.get("content-type"), "text/html");
      assertEquals(result.status, 200);
    },
  },
  {
    name: "handle path param wildcard",
    fn: async () => {
      const result1 = await fetch("http://localhost:3000/user/xxx");
      assert((await result1.text()).includes("I am xxx"));

      const result2 = await fetch("http://localhost:3000/user/jojo");
      assert((await result2.text()).includes("I am jojo"));
    },
  },
  {
    name: "serve asset under _assets",
    fn: async () => {
      const result = await fetch(
        "http://localhost:3000/_assets/index.css",
      );
      assertEquals(
        await result.text(),
        `
button { background-color: bisque; font-size: 24px; }
.class1 { font-size: large; }
.class2 { font-size: small; }
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
        "http://localhost:3000/_assets/index.css",
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
        "http://localhost:3000/_assets/index.css",
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
    name: "securiy header (helmet middleware)",
    fn: async () => {
      const result = await fetch("http://localhost:3000");
      assertEquals(result.headers.get("X-DNS-Prefetch-Control"), "off");
      assertEquals(result.headers.get("X-Frame-Options"), "SAMEORIGIN");
      assertEquals(result.headers.get("X-Download-Options"), "noopen");
      assertEquals(result.headers.get("X-Content-Type-Options"), "nosniff");
      assertEquals(result.headers.get("X-XSS-Protection"), "1; mode=block");
    },
  },
  {
    name: "return 404 when querying directory without _client.ts",
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
    name: "environment variables",
    fn: async () => {
      const result = await fetch("http://localhost:3000/banana");
      const text = await result.text();
      assert(text.includes("Word2: DEV_ENV(set from server)"));
    },
  },
  {
    name:
      "updating _server.ts should work when server is running in hotReloadChanges mode",
    fn: async () => {
      const result = await fetch("http://localhost:3000/banana");
      assert((await result.text()).includes("i am banana"));
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      const path = new URL("../../demo/home/banana/_server.ts", import.meta.url)
        .pathname;
      const fileContent = decoder.decode(await Deno.readFile(path));
      const replacedWord = "coconut";
      assert(!fileContent.includes(replacedWord));
      await Deno.writeFile(
        path,
        encoder.encode(fileContent.replace(/banana/, replacedWord)),
      );

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const result2 = await fetch("http://localhost:3000/banana");

      // reset the file
      await Deno.writeFile(path, encoder.encode(fileContent));
      assert((await result2.text()).includes(replacedWord));
    },
  },
  {
    name:
      "updating _client.ts (or its dependencies) should work when server is running in hotReloadChanges mode",
    fn: async () => {
      const result = await fetch("http://localhost:3000/banana");
      assert((await result.text()).includes("hello world"));
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      const path = new URL("../../demo/home/banana/view.tsx", import.meta.url)
        .pathname;
      const fileContent = decoder.decode(await Deno.readFile(path));
      const replacedWord = "salam dunia";
      assert(!fileContent.includes(replacedWord));
      await Deno.writeFile(
        path,
        encoder.encode(fileContent.replace(/hello world/, replacedWord)),
      );

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const result2 = await fetch("http://localhost:3000/banana");

      // reset the file
      await Deno.writeFile(path, encoder.encode(fileContent));
      assert((await result2.text()).includes(replacedWord));
    },
  },
];

let numberOfRanTest = 0;
const done = () => {
  numberOfRanTest++;
  if (numberOfRanTest === tests.length) {
    const SIGTERM = 15;
    server.kill(SIGTERM);
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
