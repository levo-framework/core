import { view } from "./view.tsx";
import { Model, Action } from "./types.ts";
import { serve } from "./../../../mod/levo-serve.ts";

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
