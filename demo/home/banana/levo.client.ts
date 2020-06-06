import { Model } from "./model.ts";
import { Action } from "./action.ts";
import { view } from "./view.ts";
import { init } from "./init.ts";
import { update } from "./update.ts";
import { client } from "../../../mod/levo-client.ts";

const c = client<Model, Action>();
c.registerView(view);
c.registerInit(init);
c.registerUpdate(update);
