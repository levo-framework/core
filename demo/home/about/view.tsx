/** @jsx h */
import { Levo, h } from "../../../mod/levo-view.ts";
import { Model, Action } from "./types.ts";
import { Counter } from "./counter.tsx";

export const view = (
  model: Model,
  dispatch: Levo.Dispatch<Action>,
): Levo.Element => {
  return (
    <html>
      <body>
        {model.randomNumber}
        <button onclick={dispatch({ $: "update_random_number" })}>
          Update random number
        </button>
        <Counter.View
          model={model.counterModel}
          dispatch={Levo.mapDispatch(
            dispatch,
            (action) => ({ $: "counter_action" as const, action }),
          )}
        />
      </body>
    </html>
  );
};
