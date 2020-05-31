import { view } from './levo.view.ts';
import { Action } from './action.ts';
import { handle } from './../../src/levo-handle.ts';
import { Model } from './model.ts';

handle<Model, Action>({
  view,
  getModel: async (req) => {
    return { currentValue: req.url.length }
  }
})