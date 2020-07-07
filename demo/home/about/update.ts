import { Model, Action } from "./types.ts";
import { Counter } from "./counter.tsx";
import { Levo } from "../../../mod/levo-view.ts";
import { Environment } from "../../environment.ts";

export const update: Levo.Update<Model, Action, Environment> = (
  { model, action, event, environment },
) => {
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
      const { newModel: counterState, then } = Counter.update({
        model: model.counterModel,
        action: action.action,
        event,
        environment,
      });
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
