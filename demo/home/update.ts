import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { LevoUpdate } from "../../mod/levo-update.ts";

export const update: LevoUpdate<Model, Action> = (model, action, event) => {
  switch (action.$) {
    case "add": {
      return {
        newModel: {
          ...model,
          currentValue: model.currentValue + 1,
        },
      };
    }
    case "minus": {
      return {
        newModel: {
          ...model,
          currentValue: model.currentValue - 1,
        },
      };
    }
    case "fetch": {
      return {
        newModel: {
          ...model,
          text: "Loading",
        },
        then: () =>
          fetch(
            "https://raw.githubusercontent.com/denoland/deno/master/Cargo.toml",
          )
            .then((res) => res.text())
            .then((text) => ({
              $: "text_fetched",
              text,
            })),
      };
    }
    case "text_fetched": {
      return {
        newModel: {
          ...model,
          text: action.text,
        },
      };
    }
    case "set_interval_id": {
      return {
        newModel: {
          ...model,
          intervalId: action.intervalId,
        },
      };
    }
    case "stop_interval": {
      if (model.intervalId) {
        clearInterval(model.intervalId);
      }
      return {
        newModel: {
          ...model,
          intervalId: undefined,
        },
      };
    }
  }
};
