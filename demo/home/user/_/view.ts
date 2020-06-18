import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { createDispatch, render, Levo } from "../../../../mod/levo-view.ts";

export const view = (model: Model): Levo.Element<Action> => {
  const $ = createDispatch<Action>();
  return render(
    ["html", {}, [
      ["body", {}, [
        `I am ${model.name}`,
      ]],
    ]],
  );
};
