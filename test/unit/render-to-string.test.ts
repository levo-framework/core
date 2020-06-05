import { renderToString } from "../../src/render-to-string.ts";
import { assertEquals } from "../../src/deps.ts";
import { render } from "../../mod/levo-view.ts";

Deno.test("render-to-string", () => {
  const virtualNode = render<{ type: "click"; index: number }>(
    ["div", { style: { display: "grid", alignItems: "center" } }, [
      ["input", { value: "hello" }],
      ["button", { onclick: { type: "click", index: 2 } }, [
        "click me",
      ]],
    ]],
  );

  assertEquals(
    renderToString(virtualNode),
    `
  <div style='display:grid;align-items:center'><input value='hello'></input><button onclick='$$h({type:\"click\",index:2})'>click me</button></div>
  `.trim(),
  );
});
