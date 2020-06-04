import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { LevoView } from "../../../mod/levo-view.ts";
import { elementCreator, actionCreator } from "../../../mod/creator.ts";

export const view: LevoView<Model, Action> = (model) => {
  const h = elementCreator<Action>();
  const $ = actionCreator<Action>();
  return (
    h.html(
      {},
      h.body(
        {},
        `I am ${model.name}`,
      ),
    )
  );
};
