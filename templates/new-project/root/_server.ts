import { view } from "./view.tsx";
import { Model, Action, initialModel } from "./types.ts";
import { serve } from "levo/levo-serve.ts";
import { Environment } from "environment";

export default serve<Model, Action, Environment>({
  getResponse: async (request, response) => {
    return response.page({
      view,
      model: initialModel(),
    });
  },
});
