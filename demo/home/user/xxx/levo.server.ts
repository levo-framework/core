import { view } from "./view.tsx";
import { serve } from "./../../../../mod/levo-serve.ts";
import { Model, Action } from "./types.ts";

serve<Model, Action>({
  getResponse: async (request, respond) => {
    return respond.page({
      view,
      model: {},
    });
  },
});
