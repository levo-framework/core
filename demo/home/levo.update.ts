import { Action } from './action.ts';
import { Model } from './model.ts';
import { LevoUpdate, Levo } from "../../src/levo.ts";

export const update: LevoUpdate<Model, Action> = (model, action, event) => {
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
    case 'set_interval_id': {
      return {
        ...model,
        intervalId: action.intervalId
      }
    }
    case 'stop_interval': {
      if(model.intervalId) {
        clearInterval(model.intervalId)
      }
      return {
        ...model,
        intervalId: undefined
      }
    }
  }
}
Levo<Model, Action>().registerUpdate(update)