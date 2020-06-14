import { Action } from "./action.ts";
import { render, createActions, Levo } from "./../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view = (model: Model): Levo.Element<Action> => {
  const $ = createActions<Action>();
  const items = [{ content: "spongebob" }, { content: "squarepants" }];
  const isEven = model.currentValue % 2 === 0;
  return render<Action>(
    ["html", {}, [
      ["head", {}, [
        ["link", { rel: "stylesheet", href: "./levo.assets/index.css" }],
      ]],
      model.currentValue.toString(),
      [
        "button",
        {
          class: isEven ? "class1" : "class2",
          onclick: $.add(),
          style: {
            backgroundColor: isEven ? "red" : "green",
          },
        },
        ["add"],
      ],
      ["button", { onclick: $.minus() }, ["minus"]],
      ["button", { onclick: $.stop_interval() }, ["stop timer"]],
      ["button", { onclick: $.fetch() }, ["fetch"]],
      ["button", { onclick: isEven ? $.add() : $.minus() }, ["click me"]],
      `Text: ${model.text}`,
      [
        "input",
        {
          type: "checkbox",
          checked: isEven ? "true" : undefined,
        },
      ],
      ["input", { value: isEven ? "even" : "odd" }],
      [
        "body",
        {},
        items.map((item) => render<Action>(["div", {}, [item.content]])),
      ],
    ]],
  );
};
