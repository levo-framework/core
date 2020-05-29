/// <reference lib="dom" />
import { VirtualNode } from './virtual-node.ts';
import { diff } from './virtual-node-diff.ts';
import { mount } from './mount.ts';
import { applyPatches } from './apply-patches.ts';

const start = <Model, Action>({
  at,
  view,
  update,
  initialModel
}: {
  initialModel: Model
  view: (model: Model) => VirtualNode<Action>
  update: (model: Model, action: Action, event: Event | undefined) => Model
  at: HTMLElement | Document | null;
}) => {
  if (!at) {
    throw new Error(`Root element is undefined`);
  }
  let { node, virtualNode: currentVirtualNode } = mount({
    virtualNode: view(initialModel)
  });
  let currentModel = initialModel;
  at.appendChild(node);
  const handler = (action: Action | undefined) => {
    const event = window.event
    if (action) {
      const newModel = update(currentModel, action, event);
      const newVirtualNode = view(newModel)
      console.log("re-render");
      console.log("action", action)
      const patches = diff({
        original: currentVirtualNode,
        updated: newVirtualNode,
        parentVirtualNode: undefined
      })
      currentVirtualNode = applyPatches({
        patches,
        mountedVirtualNode: currentVirtualNode
      })
      console.log("patches", patches)
      console.log("currentVirtualNode", currentVirtualNode)
      currentModel = newModel;
    }
  };

  //@ts-ignore
  window.$$h = handler;
};

//@ts-ignore
if(!window.$levoView) {
  throw new Error(`You might have forgot to call Levo.registerView at view.levo.ts`)
}

//@ts-ignore
if(!window.$levoUpdater) {
  throw new Error(`You might have forgot to call Levo.registerUpdater at updater.levo.ts`)
}

// Make document node child-less
if(document.firstElementChild) {
  document.removeChild(document.firstElementChild)
}
start({
  at: document,

  //@ts-ignore
  initialModel: window.$levoModel,

  //@ts-ignore
  view: window.$levoView,

  //@ts-ignore
  update: window.$levoUpdater
})