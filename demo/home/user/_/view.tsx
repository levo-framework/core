import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { Levo } from "../../../../mod/levo-view.ts";

export const view = (
  model: Model,
  dispatch: Levo.Dispatch<Action>,
): Levo.Element => {
  return (
    <html>
      <body>
        I am {model.name}
      </body>
    </html>
  );
};
