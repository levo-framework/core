import { Model, Action } from "./types.ts";
import { Levo } from "../../../mod/levo-view.ts";
import { Environment } from "../../environment.ts";

export const update: Levo.Update<Model, Action, Environment> = (
  { model, action, event },
) => {
  switch (action.$) {
    case "set word 3": {
      return {
        newModel: {
          ...model,
          word3: action.value,
        },
      };
    }
  }
};
