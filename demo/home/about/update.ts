import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { LevoUpdate } from "../../../mod/levo-update.ts";
import { Counter } from "./counter.tsx";

export const update: LevoUpdate<Model, Action> = (model, action, event) => {
  switch (action.$) {
    case "say hello":
      alert("hello");
      return { newModel: model };

    case "show":
      alert(`show ${action.color}`);
      return { newModel: model };

    case 'add': {
      return {
        newModel: {
          ...model,
          count: model.count + 1
        },
      }
    }

    case 'counterAction': {
      const {newModel: counterState, then} = Counter.update(model.counterState, action.action, event)
      return {
        newModel: {
          ...model,
          counterState
        },
        then: then 
          ? () => then().then(action => ({ $: 'counterAction' as const, action })) 
          : undefined
      }
    }
  }
};
