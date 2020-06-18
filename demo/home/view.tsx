import { Action } from "./action.ts";
import { Levo } from "./../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view = (
  model: Model,
  dispatch: Levo.Dispatch<Action>,
): Levo.Element => {
  const items = [{ content: "spongebob" }, { content: "squarepants" }];
  const isEven = model.currentValue % 2 === 0;
  return (
    <html>
      <head>
        <link rel="stylesheet" href="./levo.assets/index.css" />
      </head>
      {model.currentValue}
      <button
        style={{ backgroundColor: isEven ? "red" : "green" }}
        onclick={dispatch({ $: "add" })}
      >
        add
      </button>
      <button onclick={dispatch({ $: "minus" })}>minus</button>
      <button onclick={dispatch({ $: "stop_interval" })}>stop timer</button>
      <button onclick={dispatch({ $: "fetch" })}>fetch</button>
      <button onclick={dispatch(isEven ? { $: "add" } : { $: "minus" })}>
        click me
      </button>
      Text: {model.text}
      <input type="checkbox" checked={isEven ? "true" : undefined} />
      <input value={isEven ? "even" : "odd"} />
      {items.map((item) => <div>{item.content}</div>)}
    </html>
  );
  // return render<Action>(
  //   ["html", {}, [
  //     ["head", {}, [
  //       ["link", { rel: "stylesheet", href: "./levo.assets/index.css" }],
  //     ]],
  //     model.currentValue.toString(),
  //     [
  //       "button",
  //       {
  //         onclick: $.add(),
  //         style: {
  //           backgroundColor: isEven ? "red" : "green",
  //         },
  //       },
  //       ["add"],
  //     ],
  //     ["button", { onclick: $.minus() }, ["minus"]],
  //     ["button", { onclick: $.stop_interval() }, ["stop timer"]],
  //     ["button", { onclick: $.fetch() }, ["fetch"]],
  //     ["button", { onclick: isEven ? $.add() : $.minus() }, ["click me"]],
  //     `Text: ${model.text}`,
  //     [
  //       "input",
  //       {
  //         type: "checkbox",
  //         checked: isEven ? "true" : undefined,
  //       },
  //     ],
  //     ["input", { value: isEven ? "even" : "odd" }],
  //     [
  //       "body",
  //       {},
  //       items.map((item) => render<Action>(["div", {}, [item.content]])),
  //     ],
  //   ]],
  // );
};
