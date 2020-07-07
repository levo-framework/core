import { Model, Action } from "./types.ts";
import { view } from "./view.tsx";
import { update } from "./update.ts";
import { Levo } from "../../../mod/levo-view.ts";
import { Environment } from "../../environment.ts";

export const init: Levo.Init<Model, Action, Environment> = (
  { model, dispatch },
) => {
};

Levo.register<Model, Action, Environment>({ init, view, update });
