import { Action } from './action.ts';
import { Model } from './model.ts';
import { LevoUpdater, Levo } from "../../src/levo.ts";

export const updater: LevoUpdater<Model, Action> = (model, action, event) => {
  switch (action.type) {
    case 'add': {
      return {
        ...model,
        currentValue: model.currentValue + 1
      }
    }
    case 'minus': {
      return {
        ...model,
        currentValue: model.currentValue - 1
      }
    }
  }
}
Levo<Model, Action>().registerUpdater(updater)