import { Model, Action } from "./types.ts";
import { Levo } from "../../../../mod/levo-view.ts";

export const update: Levo.Update<Model, Action> = (
  { model },
) => {
  return { newModel: model };
};
