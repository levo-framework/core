/// <reference lib="dom"/>

import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { LevoUpdate } from "https://deno.land/x/levo/mod/levo-update.ts";

export const update: LevoUpdate<Model, Action> = (model, action, event) => {
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
