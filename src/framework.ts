/// <reference lib="dom" />

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
    div: (props) => ({
      type: "div",
      ...props,
    }),
    button: (props) => ({
      type: "button",
      ...props,
    }),
    input: (props) => ({
      type: "input",
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
  div: ElementCreator<Action, "div">;
  button: ElementCreator<Action, "button">;
  input: ElementCreator<Action, "input">;
};

type ElementCreator<Action, T extends VirtualElement<Action>["type"]> = (
  props: Prop<Action, T>,
) => VirtualElement<Action>;

type Prop<Action, T extends VirtualElement<Action>["type"]> = Omit<
  Extract<VirtualElement<Action>, { type: T }>,
  "type"
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
  render: <ToAction>({}: {
    handle: (fromAction: Action) => ToAction;
    props: Props;
    state: State;
  }) => VirtualNode<ToAction>;
};

export type Action<T> = T extends
  Component<infer _, infer _, infer Action> ? Action
  : never;

export type VirtualNode<Action> = string | VirtualElement<Action>
export type VirtualElement<Action> =
  (
  & {
    events?: Partial<Record<keyof HTMLElementEventMap, Action>>;
  }
  & ({
    type: "div";
    children?: VirtualNode<Action>[];
  } | {
    type: "button";
    style?: {};
    attr?: {
      value?: string;
    };
  } | {
    type: "input";
    value: string;
  }));

export const start = <Props extends {}, State, Action>({
  component,
  at,
}: {
  component: ComponentReturnType<Props, State, Action>;
  at: HTMLElement | null;
}) => {
  if (!at) {
    throw new Error(`Root element is undefined`);
  }
  let virtualDom = component.render({
    state: component.initialState,
    handle: (x) => x,
    props: {} as any,
  });

  let state = component.initialState;
  const handler = (action: Action | undefined, event: Event) => {
    if (action) {
      const newState = component.update(state, action as any, event);
      const newVirtualDom = component.render(
          { state: newState, handle: (x) => x, props: {} as any },
        )
      console.log("re-render");
      const patches = diff({
        original: virtualDom,
        updated: newVirtualDom,
        patches: [],
        path: [0],
      })
      console.log(patches)
      applyPatches({
        element: at,
        patches,
        handler
      })
      state = newState
      virtualDom = newVirtualDom
      // at.innerHTML = "";
      // at.appendChild(
      //   mount({
      //   virtualDom: newVirtualDom,
      //   handler,
      // }));
    }
  };
  at.appendChild(mount({
    virtualDom: virtualDom,
    handler,
  }));
};

type Path = number[]

type Patch<Action> = {
  path: Path,
  operation: {
    type: 'replace_node'
    node: VirtualNode<Action>
  } | {
    type: 'add_node'
    node: VirtualNode<Action>
  } | {
    type: 'remove_node'
  }
}
const diff = <Action>({
  original,
  updated,
  patches,
  path
}: {
  original: VirtualNode<Action>, 
  updated: VirtualNode<Action>, 
  patches: Patch<Action>[],
  path: Path
}): Patch<Action>[] => {
  if(typeof original === 'string') {
    if(original !== updated) {
      return [...patches,{
        path,
        operation: {
          type: 'replace_node',
          node: updated
        }
      }]
    }
    else {
      return patches
    }
  }
  else {
    if(typeof updated === 'string') {
      return [...patches,{
        path,
        operation: {
          type: 'replace_node',
          node: updated
        }
      }]
    }
    else {
      if(original.type !== updated.type) {
        return [...patches,{
          path,
          operation: {
            type: 'replace_node',
            node: updated
          }
        }]
      }
      else {
        if(original.type === 'div' && updated.type === 'div') {
          return [...patches,{
            path,
            operation: {
              type: 'replace_node',
              node: updated
            }
          }]
        }
        else {
          return [...patches,{
            path,
            operation: {
              type: 'replace_node',
              node: updated
            }
          }]
        }
      }
    }
  }
}

const applyPatches = <Action>({
  element,
  patches,
  handler
}: {
  element: HTMLElement
  patches: Patch<Action>[]
  handler: (action: Action | undefined, event: Event) => void;
}) => {
  patches.forEach(patch => {
    const target = 
      patch.path
        .slice(0, -1)
        .reduce<Element | undefined>((element, path) => element?.children?.[path], element)

    if(target === undefined) {
      throw new Error(`target is undefined at ${patch.path}`)
    }
    switch(patch.operation.type) {
      case 'replace_node': {
        const oldNode = target.childNodes[patch.path.slice(-1)[0]]
        if(!oldNode) {
          throw new Error(`oldNode is undefined as ${patch.path}`)
        }
        target.replaceChild(mount({virtualDom: patch.operation.node, handler}), oldNode)
        break
      }
    }
  })
}

const mount = <Action>({ virtualDom: element, handler }: {
  virtualDom: VirtualNode<Action>;
  handler: (action: Action | undefined, event: Event) => void;
}): Node => {
  if(typeof element === 'string') {
    return document.createTextNode(element)
  }
  const el = document.createElement(element.type);
  (Object.keys(element.events ?? {}) as (keyof HTMLElementEventMap)[])
  .map((key) => {
    el.addEventListener(key, (el as any)['$' + key] = (event: any) => {
      handler(element.events?.[key], event)
    })  
  })
  switch (element.type) {
    case "div": {
      element.children?.forEach((child) =>
        el.appendChild(mount({ virtualDom: child, handler }))
      );
      return el;
    }

    case "button": {
      el.append(document.createTextNode(
        element.attr?.value ?? "",
      ));
      return el;
    }
    case "input": {
      (el as HTMLInputElement).value = element.value;
      return el;
    }
  }
};
