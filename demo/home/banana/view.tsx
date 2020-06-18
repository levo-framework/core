import { Action } from "./action.ts";
import { Levo } from "../../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view = (
  model: Model,
  dispatch: Levo.Dispatch<Action>,
): Levo.Element => {
  return (
    <html>
      <body>
        {model.word}
      </body>
    </html>
  );
};
