import { Model, Action } from "./types.ts";
import { Levo } from "levo/levo-view.ts";

export const update: Levo.Update<Model, Action> = (
  { model, action },
) => {
  switch (action.$) {
    case "no action": {
      return {
        newModel: model
      }
    }
    case "rotate": {
      return {
        newModel: {
          ...model,
          rotation: model.rotation + 45,
        },
      };
    }
    case "change_color": {
      return {
        newModel: {
          ...model,
          color: action.color,
        },
      };
    }
  }
};
