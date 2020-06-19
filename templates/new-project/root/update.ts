/// <reference lib="dom"/>

import { Model, Action } from "./types.ts";
import { Levo } from "../../../mod/levo-view.ts";

export const update: Levo.Update<Model, Action> = (model, action, event) => {
  switch (action.$) {
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
