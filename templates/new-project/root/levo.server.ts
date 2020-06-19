import { view } from "./view.tsx";
import { Model, Action } from "./types.ts";
import { serve } from "../../../mod/levo-serve.ts";

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
