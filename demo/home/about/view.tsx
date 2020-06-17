import { Action } from "./action.ts";
import { createActions, Levo, React } from "../../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view = (model: Model): Levo.Element => {
  const $ = createActions<Action>();
  const items = "abc".split("").map((content) => ({ content }));
  return (
    <html>
      <button onclick={$.show({ color: "hey" })}>click me</button>
      <body>
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
          {items.flatMap((item, index) => [
            <div>
              {index}
            </div>,
            <div
              style={{ display: "grid", justifyContent: "center" }}
              onclick={$.show({ color: "yo" })}
              ondblclick={$["say hello"]()}
            >
              {item.content}
            </div>
          ]
          )}
        </div>
      </body>
      <X/> 
      </html>
  );
};

const X = (): Levo.Element => <div>{'hi'}{'hi'}</div>
