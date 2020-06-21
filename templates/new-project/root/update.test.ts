import { initialModel } from "./types.ts";
import { update } from "./update.ts";
import { assertEquals } from "https://deno.land/std@0.53.0/testing/asserts.ts";

Deno.test("rotate", () => {
  const model = initialModel();
  assertEquals(update(model, { $: "rotate" }).newModel, {
    ...model,
    rotation: model.rotation + 45,
  });
});

Deno.test("change_color", () => {
  const model = initialModel();
  assertEquals(update(model, { $: "change_color", color: "red" }).newModel, {
    ...model,
    color: "red",
  });
});
