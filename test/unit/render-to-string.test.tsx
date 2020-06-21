/** @jsx h */
import { h, createDispatch } from "../../mod/levo-view.ts";
import { renderToString } from "../../src/render-to-string.ts";
import { assertEquals } from "../../src/deps.ts";

Deno.test("render-to-string", () => {
  const dispatch = createDispatch<{ type: "click"; index: number }>();
  const element = (
    <div class={undefined} style={{ display: "grid", alignItems: "center" }}>
      <input value="hello" />
      <button onclick={dispatch({ type: "click", index: 3 })}>click me</button>
    </div>
  );

  assertEquals(
    renderToString(element),
    `
  <div style='display:grid;align-items:center'><input value='hello'></input><button>click me</button></div>
  `.trim(),
  );
});
