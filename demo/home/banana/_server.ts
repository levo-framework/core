import { view } from "./view.tsx";
import { Model, Action } from "./types.ts";
import { serve } from "./../../../mod/levo-serve.ts";
import { Environment } from "../../environment.ts";

export default serve<Model, Action, Environment>({
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
        word2: request.environment.VALUE_A + `(set from server)`,
      },
    });
  },
});
