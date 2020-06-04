import { view } from "./view.ts";
import { Action } from "./action.ts";
import { serve } from "./../../mod/levo-serve.ts";
import { Model } from "./model.ts";

serve<Model, Action>({
  view,
  getModel: async (req) => {
    return {
      currentValue: req.url.length + 99,
      intervalId: undefined,
      text: new URLSearchParams(req.search).get("title") ?? "",
    };
  },
});
