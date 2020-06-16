import { Action } from "./action.ts";
import { createActions, Levo, React } from "../../../mod/levo-view.ts";
import { Model } from "./model.ts";

export const view = (model: Model): Levo.Element<Action> => {
  const $ = createActions<Action>();
  const items = "abc".split("").map((content) => ({ content }));
  return (
    <html>
      <button onclick={$.show({ color: "hey" })}>click me</button>
      <body>
        <div>
          {items.map((item) => (
            <div
              style={{ display: "grid", justifyContent: "center" }}
              onclick={$.show({ color: "yo" })}
            >
              {item.content}
            </div>
          ))}
        </div>
      </body>
    </html>
  );
  // return render(
  //   ["html", {}, [
  //     ["body", {}, [
  //       ["base", { href: "home/about" }],
  //       ["button", { onclick: $["say hello"]() }, ["Hello!"]],
  //     ]],
  //   ]],
  // );
};
