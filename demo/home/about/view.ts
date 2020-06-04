import { Action } from "./action.ts";
import { LevoView } from "../../../mod/levo-view.ts";
import { Model } from "./model.ts";
import { elementCreator } from "../../../src/element-creator.ts";
import { actionCreator } from "../../../src/action-creator.ts";

export const view: LevoView<Model, Action> = (model) => {
  const h = elementCreator<Action>();
  const $ = actionCreator<Action>();
  return (
    h.html(
      {},
      h.body(
        {},
        h.base({ href: "home/about" }),
        h.button({ onclick: $["say hello"]() }, "Hello babeh!"),
      ),
    )
  );
};
