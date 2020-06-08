import { view } from "./view.ts";
import { Action } from "./action.ts";
import { serve } from "https://deno.land/x/levo/mod/levo-serve.ts";
import { Model } from "./model.ts";

serve<Model, Action>({
  getResponse: async (request, response) => {
    return response.page({
      view,
      model: {
        rotation: 0,
        color: "black",
      },
    });
  },
});
