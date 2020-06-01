import { Action } from './action.ts';
import { Model } from './model.ts';
import { LevoView, Levo } from './../../src/levo.ts';
import { elementCreators } from '../../src/element-creators.ts';

export const view: LevoView<Model, Action> = (model) => {
  const _ = elementCreators<Action>()
  return (
    _.div({}, [
      _.link({ rel: 'stylesheet', href: 'home/levo.assets/index.css' }),
      _.button({ events: { click: { type: 'minus' } } }, [
        _.text('minus')
      ]),
      _.text(model.currentValue.toString()),
      _.button({ events: { click: { type: 'add' } } }, [
        _.text('add')
      ]),
      _.button({ events: { click: { type: 'stop_interval' } } }, [
        _.text('stop timer')
      ]),
      _.text(`Interval ID: ${model.intervalId}`)
    ])
  )
}
Levo<Model, Action>().registerView(view)