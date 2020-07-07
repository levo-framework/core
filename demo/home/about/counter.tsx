/** @jsx h */
import { Levo, h } from "../../../mod/levo-view.ts";
import { Environment } from "../../environment.ts";

export namespace Counter {
  export type Model = {
    count: number;
  };

  export type Action = { $: "minus" } | { $: "add" };
  export const initialModel = (): Model => {
    return {
      count: 0,
    };
  };

  export const update: Levo.Update<Model, Action, Environment> = (
    { model, action, event },
  ) => {
    switch (action.$) {
      case "add": {
        return {
          newModel: {
            ...model,
            count: model.count + 1,
          },
        };
      }

      case "minus": {
        return {
          newModel: {
            ...model,
            count: model.count - 1,
          },
        };
      }
    }
  };

  export const View = (props: {
    model: Model;
    dispatch: Levo.Dispatch<Action>;
  }): Levo.Element => {
    return (
      <div style={{ display: "flex" }}>
        <button onclick={props.dispatch({ $: "minus" })}>-</button>
        <div>{props.model.count}</div>
        <button onclick={props.dispatch({ $: "add" })}>+</button>
      </div>
    );
  };
}
