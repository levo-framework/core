/// <reference lib="dom" />
import { Patch } from './patch.ts';
import { computeAttributesUpdates } from './compute-attributes-updates.ts';
import { VirtualNode, MountedVirtualNode } from './virtual-node.ts';

import { replaceVirtualNode } from './replace-virtual-node.ts';

type Update<T> = (value: T) => T;

export type Updatable<T> =
  & {
    [Key in keyof T]: T[Key] extends Function ? T[Key]
    :
    & { $update: (_: Update<T[Key]>) => Updatable<T> }
    & (T[Key] extends Array<infer E> ? Array<Updatable<E>>
      : T[Key] extends {} ? (Updatable<T[Key]>)
      : T[Key]);
  }
  & { $update: (_: Update<T>) => Updatable<T> };

export const elementCreators = <Action>(): ElementCreators<Action> => {
  return {
    text: (value) => ({
      $: '_text',
      value
    }),
    div: (props, children) => ({
      $: "div",
      ...props,
      children,
    }),
    button: (props, children) => ({
      $: "button",
      ...props,
      children,
    }),
    input: (props, children) => ({
      $: "input",
      ...props,
    }),
  };
};

export type Component<Props, State, Action> = (_: {
  readonly props: Props;
  readonly state: State;
  readonly element: ElementCreators<Action>;
  readonly dispatch: (action: Action) => Action;
}) => VirtualNode<Action>;

export const map = <FromAction, ToAction>(
  element: VirtualNode<FromAction>,
  transform: (action: FromAction) => ToAction,
): VirtualNode<ToAction> => {
  return element as any;
};

type ElementCreators<Action> = {
  text: (value: string) => {
    $: "_text" // not a tag, but a text node
    value: string
  }
  div: ElementCreator<Action, "div">;
  button: ElementCreator<Action, "button">;
  input: ElementCreator<Action, "input">;
};

type ElementCreator<Action, T extends VirtualNode<Action>["$"]> = (
  props: Omit<Prop<Action, T>, 'children'>,
  children?: VirtualNode<Action>[],
) => VirtualNode<Action>;

type Prop<Action, T extends VirtualNode<Action>["$"]> = Omit<
  Extract<VirtualNode<Action>, { $: T }>,
  "$"
>;

type Updater<State, Action> = (state: State, action: Action) => State;
export const component = <
  T extends {
    Props?: object;
    State?: object;
    Action?: object;
  },
  Props = T["Props"],
  State = T["State"],
  Action = T["Action"],
  >(_: {
    initialState: State;
    view: Component<Props, State, Action>;
    update: (
      state: State,
      action: Exclude<Action, { $handleByParent?: true }>,
      event: any,
    ) => State;
  }): ComponentReturnType<Props, State, Action> => ({
    ..._,
    render: ({ handle, props, state }) => {
      return map(
        _.view({
          props,
          state,
          element: elementCreators(),
          dispatch: handle as any, // has to surpress compile error
        }),
        handle,
      );
    },
  });

type ComponentReturnType<Props, State, Action> = {
  initialState: State;
  view: Component<Props, State, Action>;
  update: (
    state: State,
    action: Exclude<Action, { $handleByParent?: true }>,
    event: any,
  ) => State;
  render: <ToAction>({ }: {
    handle: (fromAction: Action) => ToAction;
    props: Props;
    state: State;
  }) => VirtualNode<ToAction>;
};

export type Action<T> = T extends Component<infer _, infer _, infer Action>
  ? Action
  : never;

export const start = <Model, Action>({
  at,
  view,
  update,
  initialModel
}: {
  initialModel: Model
  view: (model: Model) => VirtualNode<Action>
  update: (model: Model, action: Action, event: Event | undefined) => Model
  at: HTMLElement | null;
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

      // Remount (temporary, to be removed)
      // at.innerHTML = "";
      // const { node, virtualNode } = mount({
      //   virtualNode: newVirtualNode,
      // });
      // at.appendChild(node);
      // currentVirtualNode = virtualNode;
    }
  };

  //@ts-ignore
  window.$$h = handler;
};

const diff = <Action>({
  original,
  updated,
  parentVirtualNode
}: {
  original: MountedVirtualNode<Action>;
  updated: VirtualNode<Action>;
  parentVirtualNode: MountedVirtualNode<Action> | undefined
}): Patch<Action>[] => {
  if (
    original.$ !== updated.$
    ||
    (original.$ === '_text' && updated.$ === '_text'
      && updated.value !== (original as any).value)
  ) {
    return [{
      type: 'replace_node',
      updatedVirtualNode: updated,
      originalNode: original,
      parentVirtualNode
    }]
  }
  else {
    // Compare attributes
    const originalAttrs = extractAttributes(original)
    const updatedAttrs = extractAttributes(updated)
    const attributesUpdates = computeAttributesUpdates<string>({
      originalAttrs,
      updatedAttrs,
    })
      .map(update => ({
        originalNode: original,
        ...update,
      }))

    // Compare styles
    const styleAttributesUpdates = computeAttributesUpdates<string | undefined>({
      originalAttrs: original.style ?? {},
      updatedAttrs: updated.style ?? {}
    })
      .map<Patch<Action>>(update => {
        switch (update.type) {
          case 'remove_attribute':
            return {
              ...update,
              originalNode: original,
              type: 'remove_style_attribute'
            }

          case 'update_attribute':
            return {
              ...update,
              originalNode: original,
              type: 'update_style_attribute'
            }
        }
      })


    // Compare event handlers
    const eventAttributesUpdates = computeAttributesUpdates<Action | undefined>({
      originalAttrs: original.events ?? {},
      updatedAttrs: updated.events ?? {}
    })
      .map<Patch<Action>>(update => {
        switch (update.type) {
          case 'remove_attribute':
            return {
              originalNode: original,
              type: 'remove_event_attribute',
              attributeName: update.attributeName
            }

          case 'update_attribute':
            return {
              originalNode: original,
              type: 'update_event_attribute',
              attributeName: update.attributeName,
              action: update.value
            }
        }
      })

    // Compare child
    // TODO: use optimized diff algorithm 
    // Now is using naive method

    const addedChildren = updated.children?.slice(original.children?.length ?? 0) ?? []
    const removedChildren = original.children?.slice(updated.children?.length ?? 0)
      .map(child => child.ref) ?? []

    const originalChildrenLength = original.children?.length ?? 0
    const updatedChildrenLength = updated.children?.length ?? 0
    const minLength = originalChildrenLength < updatedChildrenLength
      ? originalChildrenLength
      : updatedChildrenLength

    const childrenUpdates = original.children?.slice(0, minLength)
      .flatMap((child, index) => {
        const updatedChild = updated.children?.[index]
        if (updatedChild) {
          return diff({
            original: child,
            updated: updatedChild,
            parentVirtualNode: original
          })
        }
        else {
          return []
        }
      }) ?? []


    return [
      ...attributesUpdates,
      ...styleAttributesUpdates,
      ...eventAttributesUpdates,
      ...childrenUpdates,
      ...addedChildren.map(child => ({
        type: "add_node" as const,
        virtualNode: child,
        originalNode: original
      })),
      ...removedChildren.map(nodeToBeRemoved => ({
        type: 'remove_node' as const,
        nodeToBeRemoved,
        originalNode: original,
      }))
    ]
  }
};
const extractAttributes = <Action>(
  virtualNode: VirtualNode<Action> | MountedVirtualNode<Action>
): Omit<VirtualNode<Action>, 'ref' | 'style' | 'events' | '$' | 'children'> => {
  const { style, events, $, children, ...attributes } = virtualNode
  if ('ref' in attributes) {
    //@ts-ignore
    delete attributes['ref']
  }
  return attributes
}

/**
 * This function will mutate DOM and `mountedVirtualNode`
 */
const applyPatches = <Action>({
  patches,
  mountedVirtualNode
}: {
  patches: Patch<Action>[];
  mountedVirtualNode: MountedVirtualNode<Action>
}): MountedVirtualNode<Action> => {
  return patches.reduce((updatedMountedVirtualNode, patch) => {
    switch (patch.type) {
      case 'add_node': {
        const { virtualNode, node } = mount({ virtualNode: patch.virtualNode })
        patch.originalNode.ref.appendChild(node)
        patch.originalNode.children?.push(virtualNode)
        return updatedMountedVirtualNode
      }
      case 'remove_node': {
        patch.originalNode.ref.removeChild(patch.nodeToBeRemoved)
        const index = patch.originalNode.children
          ?.findIndex(child => child.ref === patch.nodeToBeRemoved) ?? 0
        if (index > -1) {
          patch.originalNode.children?.splice(index, 1)
        }
        return updatedMountedVirtualNode
      }
      case 'replace_node': {
        const { virtualNode, node } = mount({ virtualNode: patch.updatedVirtualNode })
        patch.originalNode.ref.parentElement?.replaceChild(node, patch.originalNode.ref)
        if (!patch.parentVirtualNode) {
          return virtualNode
        }
        else if (patch.parentVirtualNode.children) {
          const index = patch.parentVirtualNode.children
            ?.findIndex(child => child.ref === patch.originalNode.ref)
          patch.parentVirtualNode.children[index] = virtualNode
          return updatedMountedVirtualNode
        }
        else {
          return updatedMountedVirtualNode
        }
      }
      case 'update_attribute': {
        (patch.originalNode.ref as HTMLElement).setAttribute?.(patch.attributeName, patch.value);
        (patch.originalNode as any)[patch.attributeName] = patch.value
        return updatedMountedVirtualNode
      }
      case 'remove_attribute': {
        (patch.originalNode.ref as HTMLElement).removeAttribute?.(patch.attributeName)
        delete (patch.originalNode as any)[patch.attributeName]
        return updatedMountedVirtualNode
      }
      case 'update_style_attribute': {
        ((patch.originalNode.ref as HTMLElement).style as any)[patch.attributeName] =
          patch.value;
        (patch.originalNode.style as any)[patch.attributeName]  = patch.value
        return updatedMountedVirtualNode
      }
      case 'remove_style_attribute': {
        ((patch.originalNode.ref as HTMLElement).style as any)[patch.attributeName] = undefined
        delete (patch.originalNode.style as any)[patch.attributeName]
        return updatedMountedVirtualNode
      }
      case 'update_event_attribute': {
        if(patch.action) {
          setEventHandler(
            ((patch.originalNode.ref as HTMLElement)),
            patch.attributeName,
            patch.action
          );
          (patch.originalNode.events as any)[patch.attributeName] = patch.action 
        };
        return updatedMountedVirtualNode
      }
      case 'remove_event_attribute': {
        (patch.originalNode.ref as HTMLElement).removeAttribute("on" + patch.attributeName)
        delete (patch.originalNode.events as any)[patch.attributeName]
        return updatedMountedVirtualNode
      }
      default:
        return updatedMountedVirtualNode
    }
  }, mountedVirtualNode)
};

// type Mounted<T> = 
//   & {
//     [Key in keyof T]: 
//       T[Key] extends Array<infer E> | undefined
//         ? E extends T 
//           ? Array<Mounted<E>> | undefined
//           : T[Key]
//         : T[Key];
//   }
//   & { ref: Node };

const setEventHandler = <Action>(
  element: HTMLElement,
  eventName: string,
  action: Action
) => {
  if(action !== undefined) {
    element.setAttribute(
      "on" + eventName,
      `$$h(${JSON.stringify(action).replace(/"([^"]+)":/g, '$1:')})`
    );
  }
}

const mount = <Action>({ virtualNode }: {
  virtualNode: VirtualNode<Action>;
}): {
  node: Node;
  virtualNode: MountedVirtualNode<Action>;
} => {
  if (virtualNode.$ === '_text') {
    const node = document.createTextNode(virtualNode.value)
    return { node, virtualNode: {...virtualNode, ref: node}};
  }
  const node = document.createElement(virtualNode.$);
  (Object.keys(virtualNode.events ?? {}) as (keyof HTMLElementEventMap)[])
    .map((eventName) => {
      const action = virtualNode.events?.[eventName];
      setEventHandler(node, eventName, action)
    });


  const attributes = extractAttributes(virtualNode)
  Object.entries(attributes).map(([key, value]) => {
    if (value) {
      node.setAttribute(key, value as string);
    }
  });
  Object.entries(virtualNode.style ?? {}).forEach(([key, value]) => {
    if (value) {
      node.style[key as any] = value
    }
  })
  const updatedVirtualNode = {
    ...virtualNode,
    children: virtualNode.children?.map((childVirtualNode) => {
      const { node: childNode, virtualNode } = mount(
        { virtualNode: childVirtualNode },
      );
      node.appendChild(childNode); // side-effect
      return virtualNode;
    }),
    ref: node
  }
  return { node, virtualNode: updatedVirtualNode };
};
