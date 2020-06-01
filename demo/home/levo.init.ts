import { Action } from './action.ts';
import { Model } from './model.ts';
import { Levo, LevoInit } from './../../src/levo.ts';

export const init: LevoInit<Model, Action> = (model, dispatch) => {
  const intervalId = setInterval(() => {
    dispatch({type: 'add'}) 
  }, 1000);
  dispatch({type: 'set_interval_id', intervalId})
}

Levo<Model, Action>().registerInit(init)