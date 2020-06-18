import { view } from "./view.tsx";
import { Action } from "./action.ts";
import { serve } from "./../../../mod/levo-serve.ts";
import { Model } from "./model.ts";
import { Counter } from "./counter.tsx";

serve<Model, Action>({
  getResponse: async (request, response) => {
    return response.page({ 
      view, 
      model: {
        count: 0,
        counterState: Counter.initialState()
      } 
    });
  },
});
