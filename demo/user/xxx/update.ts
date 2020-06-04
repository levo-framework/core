import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { LevoUpdate } from "../../../mod/levo-update.ts";

export const update: LevoUpdate<Model, Action> = (model, action, event) => {
  if (action.$ === "say hello") {
    alert("hello");
  }
  return { newModel: model };
};
