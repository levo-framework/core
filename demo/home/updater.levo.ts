import { Action } from './action.levo.ts';
import { Model } from './model.levo.ts';
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