import { view } from "./view.tsx";
import { Action } from "./action.ts";
import { serve } from "./../../mod/levo-serve.ts";
import { Model } from "./model.ts";

serve<Model, Action>({
  getResponse: async (request, respond) => {
    return respond.page({
      view,
      model: {
        currentValue: request.url.length + 99,
        intervalId: undefined,
        text: new URLSearchParams(request.search).get("title") ?? "",
      },
    });
  },
});
