import { view } from "./view.tsx";
import { Model, Action, initialModel } from "./types.ts";
import { serve } from "levo/levo-serve.ts";

export default serve<Model, Action, unknown>({
  getResponse: async (request, response) => {
    return response.page({
      view,
      model: initialModel(),
    });
  },
});
