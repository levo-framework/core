import { Action } from './action.levo.ts';
import { Model } from './model.levo.ts';
import { LevoView, Levo } from './../../src/levo.ts';
import { elementCreators } from '../../src/element-creators.ts';

export const view: LevoView<Model, Action> = (model) => {
  const _ = elementCreators<Action>()
  return (
    _.div({}, [
      _.button({ events: { click: {type: 'minus'} } }, [
        _.text('minus')
      ]),
      _.text(model.currentValue.toString()),
      _.button({ events: { click: {type: 'add'} } }, [
        _.text('add')
      ])
    ])
  )
}
Levo<Model, Action>().registerView(view)