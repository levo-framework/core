import { initialModel, Model } from "./types.ts";
import { update } from "./update.ts";
import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";

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
