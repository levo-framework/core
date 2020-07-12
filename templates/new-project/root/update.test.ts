import { initialModel, Model } from "./types.ts";
import { update } from "./update.ts";
import { assertEquals } from "asserts";

Deno.test("rotate", () => {
  const model = initialModel();
  assertEquals<Model>(update({ model, action: { $: "rotate" } }).newModel, {
    ...model,
    rotation: model.rotation + 45,
  });
});

Deno.test("change_color", () => {
  const model = initialModel();
  assertEquals<Model>(
    update({ model, action: { $: "change_color", color: "red" } }).newModel,
    {
      ...model,
      color: "red",
    },
  );
});
