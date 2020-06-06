import { Action } from "./action.ts";
import { createActions, render, Levo } from "../../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view = (model: Model): Levo.Element<Action> => {
  const $ = createActions<Action>();
  return render(
    ["html", {}, [
      ["body", {}, [
        `${model.word}`,
      ]],
    ]],
  );
};
