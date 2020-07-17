/** @jsx h */
import { Levo, h } from "../../../../mod/levo-view.ts";
import { Model, Action } from "./types.ts";

export const view = (props: {
  model: Model;
  dispatch: Levo.Dispatch<Action>;
}): Levo.Element => {
  const { model } = props;
  return (
    <html>
      <body>
        I am {model.name}
      </body>
    </html>
  );
};
