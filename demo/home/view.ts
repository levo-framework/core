import { Action } from "./action.ts";
import { LevoView, render, createActions } from "./../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view: LevoView<Model, Action> = (model) => {
  const $ = createActions<Action>();
  return render<Action>(
    ["html", {}, [
      ["base", { href: "home/", style: { textAlign: "center" } }],
      ["head", {}, [
        ["link", { rel: "stylesheet", href: "./levo.assets/index.css" }],
      ]],
      model.currentValue.toString(),
      ["button", { onclick: $.add() }, ["add"]],
      ["button", { onclick: $.minus() }, ["minus"]],
      ["button", { onclick: $.stop_interval() }, ["stop timer"]],
      ["button", { onclick: $.fetch() }, ["fetch"]],
      `Text: ${model.text}`,
    ]],
  );
};
