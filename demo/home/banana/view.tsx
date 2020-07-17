/** @jsx h */
import { Levo, h } from "../../../mod/levo-view.ts";
import { Model, Action } from "./types.ts";

export const view = (
  props: { model: Model; dispatch: Levo.Dispatch<Action> },
): Levo.Element => {
  const { model } = props;
  return (
    <html>
      <body id="content">
        <div>
          {model.word}
        </div>
        <div>
          Word2: {model.word2}
        </div>
        <div>
          hello world
        </div>
      </body>
    </html>
  );
};
