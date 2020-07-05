/// <reference lib="dom" />
import { VirtualNode } from "./virtual-node.ts";
import { diff } from "./virtual-node-diff.ts";
import { mount } from "./mount.ts";
import { applyPatches } from "./apply-patches.ts";
import { createDispatch } from "../mod/levo-view.ts";

const start = <Model, Action extends { $: string }>({
  at,
  view,
  update,
  initialModel,
  onMount,
  log,
}: {
  initialModel: Model;
  view: (model: Model) => VirtualNode<Action>;
  update: (
    args: { model: Model; action: Action; event: Event | undefined },
  ) => {
    newModel: Model;
    then?: () => Promise<Action>;
  };
  onMount: (args: { model: Model; dispatch: (action: Action) => void }) => void;
  at: HTMLElement | Document | null;
  log?: {
    action?: boolean;
    patches?: boolean;
    model?: boolean;
  };
}) => {
  if (!at) {
    throw new Error("Root element is undefined");
  }
  let { node, virtualNode: currentVirtualNode } = mount({
    virtualNode: view(initialModel),
  });
  let currentModel = initialModel;

  // Make root node child-less
  if (at.firstElementChild) {
    at.removeChild(at.firstElementChild);
  }
  at.appendChild(node);
  const handler = (action: Action | undefined) => {
    const justNow = window.performance.now();
    const event = window.event;
    if (action) {
      const { newModel, then: promise } = update(
        { model: currentModel, action, event },
      );
      const newVirtualNode = view(newModel);

      const patches = diff({
        original: currentVirtualNode,
        updated: newVirtualNode,
        parentVirtualNode: undefined,
      });
      currentVirtualNode = applyPatches({
        patches,
        mountedVirtualNode: currentVirtualNode,
      });

      if (log?.action) {
        const timeTaken = (window.performance.now() - justNow).toFixed(2);
        const d = new Date();
        const hours = d.getHours().toString().padStart(2, "0");
        const minutes = d.getMinutes().toString().padStart(2, "0");
        const seconds = d.getSeconds().toString().padStart(2, "0");
        const currentTime = `${hours}:${minutes}:${seconds}`;
        console.groupCollapsed(
          `%caction %c${action.$} %c@ ${currentTime} (in ${timeTaken} ms)`,
          "font-weight: normal; color: grey",
          "font-weight: bold",
          "font-weight: normal; color: grey",
        );
        log.model &&
          console.log(
            `%cprev model`,
            "color: grey; font-weight: bold",
            currentModel,
          );
        console.log(`%caction    `, "color: blue; font-weight: bold", action);
        log.model &&
          console.log(
            `%cnext model`,
            "color: green; font-weight: bold",
            newModel,
          );
        log.patches &&
          console.log(
            `%cpatches   `,
            "color: pink; font-weight: bold",
            patches,
          );
        console.groupEnd();
      }
      // console.log("currentVirtualNode", currentVirtualNode)

      currentModel = newModel;
      promise?.().then(handler);
    }
  };

  onMount({ model: currentModel, dispatch: handler });

  //@ts-ignore
  window.$$h = handler;
};

//@ts-ignore
if (!window.$levo.view) {
  throw new Error(
    "You might have forgot to call Levo.registerView at levo.view.ts",
  );
}

//@ts-ignore
if (!window.$levo.update) {
  throw new Error(
    "You might have forgot to call Levo.registerUpdater at levo.updater.ts",
  );
}

start({
  at: document,

  //@ts-ignore
  initialModel: window.$levo.model,

  //@ts-ignore
  view: (model) => (window.$levo.view({ model, dispatch: createDispatch() })),

  update: (args) =>
    //@ts-ignore
    window.$levo.update({ ...args, environment: window.$levo.environment }),

  //@ts-ignore
  onMount: window.$levo.init,

  //@ts-ignore
  log: window.$levo.log,
});
