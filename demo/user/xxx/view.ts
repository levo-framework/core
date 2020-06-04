import { Action } from "./action.ts";
import { LevoView } from "../../../src/levo.ts";
import { Model } from "./model.ts";
import { elementCreator } from "../../../src/element-creator.ts";
import { actionCreator } from "../../../src/action-creator.ts";

export const view: LevoView<Model, Action> = (model) => {
  const h = elementCreator<Action>();
  const $ = actionCreator<Action>();
  return (
    h.html(
      {},
      h.body({},
        "I am xxx"
      ),
    )
  );
};
