import { renderToString } from "../../src/render-to-string.ts";
import { assertEquals } from "../../src/deps.ts";
import { render } from "../../mod/levo-view.ts";
import { lispyElementToVirtualNode } from "../../src/lispy-element-to-virtual-node.ts";

Deno.test("render-to-string", () => {
  const lispyElements = render<{ type: "click"; index: number }>(
    [
      "div",
      { class: undefined, style: { display: "grid", alignItems: "center" } },
      [
        ["input", { value: "hello" }],
        ["button", { onclick: { type: "click", index: 2 } }, [
          "click me",
        ]],
      ],
    ],
  );

  const virtualNode = lispyElementToVirtualNode(lispyElements);

  assertEquals(
    virtualNode,
    {
      $: "div",
      class: undefined,
      style: { display: "grid", alignItems: "center" },
      children: [
        { $: "input", value: "hello", children: undefined },
        {
          $: "button",
          onclick: { "type": "click", "index": 2 },
          children: [{ "$": "_text", "value": "click me" }],
        },
      ],
    },
  );

  assertEquals(
    renderToString(virtualNode),
    `
  <div style='display:grid;align-items:center'><input value='hello'></input><button>click me</button></div>
  `.trim(),
  );
});
