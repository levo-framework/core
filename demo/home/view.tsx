/** @jsx h */
import { Levo, h } from "./../../mod/levo-view.ts";
import { Model, Action } from "./types.ts";

export const view = (
  props: { model: Model; dispatch: Levo.Dispatch<Action> },
): Levo.Element => {
  const { model, dispatch } = props;
  const items = [{ content: "spongebob" }, { content: "squarepants" }];
  const isEven = model.currentValue % 2 === 0;
  return (
    <html>
      <head>
        <link rel="stylesheet" href="./_assets/index.css" />
      </head>
      <div id="current-value">
        {model.currentValue}
      </div>
      <button
        id="add-button"
        style={{ backgroundColor: isEven ? "red" : "green" }}
        onclick={dispatch({ $: "add" })}
      >
        add
      </button>
      <button id="minus-button" onclick={dispatch({ $: "minus" })}>
        minus
      </button>
      <button id="stop-timer-button" onclick={dispatch({ $: "stop_interval" })}>
        stop timer
      </button>
      <button id="fetch-button" onclick={dispatch({ $: "fetch" })}>
        fetch
      </button>
      <button
        id="click-me-button"
        onclick={dispatch(isEven ? { $: "add" } : { $: "minus" })}
      >
        click me
      </button>
      <span>Fetched text</span>
      <div id="fetched-text">
        {model.text}
      </div>
      <div>
        <input
          id="checkbox"
          type="checkbox"
          checked={isEven}
        />
        <input id="input" value={isEven ? "even" : "odd"} />
      </div>
      {items.map((item) => <div>{item.content}</div>)}
    </html>
  );
};
