import { Model, Action } from "./types.ts";
import { Levo } from "../../../mod/levo-view.ts";

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
