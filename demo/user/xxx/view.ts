import { Action } from "./action.ts";
import { LevoView, createActions, render } from "../../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view: LevoView<Model, Action> = (model) => {
  const $ = createActions<Action>();
  return render(
    ["html", {}, [
      ["body", {}, [
        "I am xxx specifically",
      ]],
    ]],
  );
};
