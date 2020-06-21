/** @jsx h */
import { Levo, h } from "./../../mod/levo-view.ts";
import { Model, Action } from "./types.ts";

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
};
