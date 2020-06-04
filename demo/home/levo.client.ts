import { Levo } from "../../src/levo.ts";
import { Model } from "./model.ts";
import { Action } from "./action.ts";
import { view } from "./view.ts";
import { init } from "./init.ts";
import { update } from "./update.ts";

const levo = Levo<Model, Action>();
levo.registerView(view);
levo.registerInit(init);
levo.registerUpdate(update);
