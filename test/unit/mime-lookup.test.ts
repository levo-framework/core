import { mimeLookup } from "../../src/mime-lookup.ts";
import { assertEquals } from "../../src/deps.ts";

Deno.test("mime-lookup", () => {
  assertEquals(mimeLookup("home/test.js"), "application/javascript");
  assertEquals(mimeLookup("home/test.pdf"), "application/pdf");
  assertEquals(mimeLookup("home/test.css"), "text/css");
  assertEquals(mimeLookup("home/test.html"), "text/html");
  assertEquals(mimeLookup("home/.git"), "text/troff");
});
