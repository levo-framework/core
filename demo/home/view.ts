import { Action } from './action.ts';
import { LevoView } from './../../src/levo.ts';
import { Model } from './model.ts';
import { elementCreator } from '../../src/element-creator.ts';
import { actionCreator } from '../../src/action-creator.ts';

export const view: LevoView<Model, Action> = (model) => {
  const h = elementCreator<Action>()
  const $ = actionCreator<Action>()
  return (
    h.html({},
      h.base({ href: 'home/' }),
      h.div({ class: 'hi', style: { display: 'grid', } },
        h.link({ rel: 'stylesheet', href: './levo.assets/index.css' }),
        h.button({ onclick: $.minus() }, 'minus'),
        model.currentValue.toString(),
        h.button({ onclick: model.currentValue % 2 === 0 ? $.add() : $.minus() }, 'add'),
        h.button({ onclick: $.stop_interval() }, 'stop timer'),
        h.button({ onclick: $.fetch() }, 'fetch'),
        `Text: ${model.text}`,
      )
    )
  )
}