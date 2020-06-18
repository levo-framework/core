import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { LevoUpdate } from "../../../mod/levo-update.ts";
import { Counter } from "./counter.tsx";

export const update: LevoUpdate<Model, Action> = (model, action, event) => {
  switch (action.$) {
    case "update_random_number": {
      return {
        newModel: {
          ...model,
          randomNumber: Math.random(),
        },
      };
    }
    case "counter_action": {
      const { newModel: counterState, then } = Counter.update(
        model.counterState,
        action.action,
        event,
      );
      return {
        newModel: {
          ...model,
          counterState,
        },
        then: then
          ? () =>
            then().then((action) => ({ $: "counter_action" as const, action }))
          : undefined,
      };
    }
  }
};
