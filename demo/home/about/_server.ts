import { view } from "./view.tsx";
import { Model, Action } from "./types.ts";
import { serve } from "./../../../mod/levo-serve.ts";
import { Counter } from "./counter.tsx";
import { Environment } from "../../environment.ts";

export default serve<Model, Action, Environment>({
  getResponse: async (request, response) => {
    return response.page({
      view,
      model: {
        randomNumber: Math.random(),
        counterModel: Counter.initialModel(),
      },
    });
  },
});
