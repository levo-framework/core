/// <reference lib="dom"/>

import { Levo } from "../../../mod/levo-view.ts";
import { Model, Action } from "./types.ts";
import { view } from "./view.tsx";
import { update } from "./update.ts";

export const init: Levo.Init<Model, Action> = () => {
};

Levo.register<Model, Action>({ init, view, update });
