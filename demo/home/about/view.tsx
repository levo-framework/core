import { Action } from "./action.ts";
import { Levo, React } from "../../../mod/levo-view.ts";
import { Model } from "./model.ts";
import { Counter } from "./counter.tsx";

export const view = (model: Model, $: Levo.Dispatch<Action>): Levo.Element => {
  const items = "abc".split("").map((content) => ({ content }));

  return (
    <html>
      <head>
        <link href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css" rel="stylesheet" />
        <script src="//cdn.muicss.com/mui-0.10.3/js/mui.min.js"></script>
      </head>
      <img src='hi'/>
      <button onclick={$.show({ color: "hey" })}>click me</button>
      {model.count}
      <button class="mui-btn mui-btn--primary mui-btn--raised" onclick={$.add()}>Add</button>
      <body>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
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
        <Counter.View 
          privateState={model.counterState} 
          dispatch={
            Levo.mapDispatch($, action => ({$: 'counterAction' as const, action}))
          }
          />
      </body>
    </html>
  );
};





