import { Model, Action } from "./types.ts";
import { view } from "./view.tsx";
import { update } from "./update.ts";
import { Levo } from "../../mod/levo-view.ts";

const init: Levo.Init<Model, Action> = ({ model, dispatch }) => {
  const intervalId = setInterval(() => {
    dispatch({ $: "add" });
  }, 1000);
  dispatch({ $: "set_interval_id", intervalId });
};

Levo.register<Model, Action>({ init, view, update });
