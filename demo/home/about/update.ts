import { Model, Action } from "./types.ts";
import { Counter } from "./counter.tsx";
import { Levo } from "../../../mod/levo-view.ts";

export const update: Levo.Update<Model, Action> = (model, action, event) => {
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
        model.counterModel,
        action.action,
        event,
      );
      return {
        newModel: {
          ...model,
          counterModel: counterState,
        },
        then: then
          ? () =>
            then().then((action) => ({ $: "counter_action" as const, action }))
          : undefined,
      };
    }
  }
};
