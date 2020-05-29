import { view } from './view.levo.ts';
import { Action } from './action.levo.ts';
import { Model } from './model.levo.ts';
import { LevoRoute } from './../../src/levo-server.ts';

export const home: LevoRoute<Model, Action> = {
  path: '/home',
  handle: async (request) => {
    return {
      model: {
        currentValue: 9
      },
      view: view
    }
  }
}