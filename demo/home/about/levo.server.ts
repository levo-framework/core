import { view } from "./view.tsx";
import { Action } from "./action.ts";
import { serve } from "./../../../mod/levo-serve.ts";
import { Model } from "./model.ts";

serve<Model, Action>({
  getResponse: async (request, response) => {
    return response.page({ view, model: {} });
  },
});
