import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { createActions, render, Levo } from "../../../../mod/levo-view.ts";

export const view = (model: Model): Levo.Element<Action> => {
  const $ = createActions<Action>();
  return render(
    ["html", {}, [
      ["body", {}, [
        `I am ${model.name}`,
      ]],
    ]],
  );
};
