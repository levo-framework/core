import { view } from "./view.tsx";
import { Model, Action } from "./types.ts";
import { serve } from "./../../../../mod/levo-serve.ts";

serve<Model, Action>({
  getResponse: async (request, respond) => {
    return respond.page({
      view,
      model: {
        name: request.url.split("/").slice(-1)[0],
      },
    });
  },
});
