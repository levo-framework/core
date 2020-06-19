import { Model, Action } from "./types.ts";
import { view } from "./view.tsx";
import { update } from "./update.ts";
import { client } from "../../../mod/levo-client.ts";
import { Levo } from "../../../mod/levo-view.ts";

export const init: Levo.Init<Model, Action> = (model, dispatch) => {
};

const c = client<Model, Action>();
c.registerView(view);
c.registerInit(init);
c.registerUpdate(update);
