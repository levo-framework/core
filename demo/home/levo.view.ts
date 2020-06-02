import { Action } from './action.ts';
import { Model } from './model.ts';
import { LevoView, Levo } from './../../src/levo.ts';
import { elementCreators } from '../../src/element-creators.ts';
import { actionCreator } from '../../src/action-creator.ts';

export const view: LevoView<Model, Action> = (model) => {
  const h = elementCreators<Action>()
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

Levo<Model, Action>().registerView(view)