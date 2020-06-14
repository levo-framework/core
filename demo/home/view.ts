import { Action } from "./action.ts";
import { render, createActions, Levo } from "./../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view = (model: Model): Levo.Element<Action> => {
  const $ = createActions<Action>();
  const items = [{ content: "spongebob" }, { content: "squarepants" }];
  return render<Action>(
    ["html", {}, [
      ["head", {}, [
        ["link", { rel: "stylesheet", href: "./levo.assets/index.css" }],
      ]],
      model.currentValue.toString(),
      ["button", { onclick: $.add() }, ["add"]],
      ["button", { onclick: $.minus() }, ["minus"]],
      ["button", { onclick: $.stop_interval() }, ["stop timer"]],
      ["button", { onclick: $.fetch() }, ["fetch"]],
      `Text: ${model.text}`,
      [
        "body",
        {},
        items.map((item) => render<Action>(["div", {}, [item.content]])),
      ],
    ]],
  );
};
