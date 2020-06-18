import { view } from "./view.tsx";
import { Action } from "./action.ts";
import { serve } from "./../../../mod/levo-serve.ts";
import { Model } from "./model.ts";

serve<Model, Action>({
  getResponse: async (request, respond) => {
    const params = new URLSearchParams(request.search);
    const redirect = params.get("redirect");
    if (redirect !== null) {
      return respond.redirect({ url: redirect });
    }
    return respond.page({
      view,
      model: {
        word: "i am banana",
      },
    });
  },
});
