import { view } from "./view.tsx";
import { Model, Action } from "./types.ts";
import { serve } from "./../../../mod/levo-serve.ts";
import { Counter } from "./counter.tsx";

serve<Model, Action>({
  getResponse: async (request, response) => {
    return response.page({
      view,
      model: {
        randomNumber: Math.random(),
        counterModel: Counter.initialState(),
      },
    });
  },
});
