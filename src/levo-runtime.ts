/// <reference lib="dom" />
import { VirtualNode } from "./virtual-node.ts";
import { diff } from "./virtual-node-diff.ts";
import { mount } from "./mount.ts";
import { applyPatches } from "./apply-patches.ts";

const start = <Model, Action>({
  at,
  view,
  update,
  initialModel,
  onMount,
}: {
  initialModel: Model;
  view: (model: Model) => VirtualNode<Action>;
  update: (model: Model, action: Action, event: Event | undefined) => {
    newModel: Model;
    then?: () => Promise<Action>;
  };
  onMount: (model: Model, dispatch: (action: Action) => void) => void;
  at: HTMLElement | Document | null;
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
    const event = window.event;
    if (action) {
      const { newModel, then: promise } = update(currentModel, action, event);
      const newVirtualNode = view(newModel);
      console.log("action", action);
      const patches = diff({
        original: currentVirtualNode,
        updated: newVirtualNode,
        parentVirtualNode: undefined,
      });
      currentVirtualNode = applyPatches({
        patches,
        mountedVirtualNode: currentVirtualNode,
      });
      console.log("patches", patches);
      // console.log("currentVirtualNode", currentVirtualNode)
      currentModel = newModel;
      promise?.().then(handler);
    }
  };

  onMount(currentModel, handler);

  //@ts-ignore
  window.$$h = handler;
};

//@ts-ignore
if (!window.$levoView) {
  throw new Error(
    "You might have forgot to call Levo.registerView at levo.view.ts",
  );
}

//@ts-ignore
if (!window.$levoUpdater) {
  throw new Error(
    "You might have forgot to call Levo.registerUpdater at levo.updater.ts",
  );
}

start({
  at: document,

  //@ts-ignore
  initialModel: window.$levoModel,

  //@ts-ignore
  view: window.$levoView,

  //@ts-ignore
  update: window.$levoUpdater,

  //@ts-ignore
  onMount: window.$levoInit,
});
