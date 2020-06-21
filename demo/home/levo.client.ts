import { Model, Action } from "./types.ts";
import { view } from "./view.tsx";
import { update } from "./update.ts";
import { client } from "../../mod/levo-client.ts";
import { Levo } from "../../mod/levo-view.ts";

const init: Levo.Init<Model, Action> = ({ model, dispatch }) => {
  const intervalId = setInterval(() => {
    dispatch({ $: "add" });
  }, 1000);
  dispatch({ $: "set_interval_id", intervalId });
};

const c = client<Model, Action>();
c.registerView(view);
c.registerInit(init);
c.registerUpdate(update);
