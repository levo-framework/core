import { Model, Action } from "./types.ts";
import { view } from "./view.tsx";
import { update } from "./update.ts";
import { Levo } from "../../../../mod/levo-view.ts";

export const init: Levo.Init<Model, Action> = (
  { model, dispatch },
) => {
};

Levo.register<Model, Action>({ init, view, update });
