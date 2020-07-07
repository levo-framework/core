import { Model, Action } from "./types.ts";
import { Levo } from "../../../../mod/levo-view.ts";
import { Environment } from "../../../environment.ts";

export const update: Levo.Update<Model, Action, Environment> = (
  { model, action, event },
) => {
  if (action.$ === "say hello") {
    alert("hello");
  }
  return { newModel: model };
};
