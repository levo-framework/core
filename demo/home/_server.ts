import { view } from "./view.tsx";
import { serve } from "./../../mod/levo-serve.ts";
import { Model, Action } from "./types.ts";
import { Environment } from "../environment.ts";

export default serve<Model, Action, Environment>({
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
