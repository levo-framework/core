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
    text: (props) => ({
      type: "text",
      ...props,
    }),
    button: (props) => ({
      type: "button",
      ...props,
    }),
  };
};

export type Component<Props, State, Action> = (_: {
  readonly props: Props;
  readonly state: State;
  readonly element: ElementCreators<Action>;
  readonly dispatch: (action: Action) => Action;
}) => HtmlElement<Action>;

export const map = <FromAction, ToAction>(
  element: HtmlElement<FromAction>,
  transform: (action: FromAction) => ToAction,
): HtmlElement<ToAction> => {
  return element as any;
};

type ElementCreators<Action> = {
  div: ElementCreator<Action, "div">;
  text: ElementCreator<Action, "text">;
  button: ElementCreator<Action, "button">;
};

type ElementCreator<Action, T extends HtmlElement<Action>["type"]> = (
  props: Prop<Action, T>,
) => HtmlElement<Action>;

type Prop<Action, T extends HtmlElement<Action>["type"]> = Omit<
  Extract<HtmlElement<Action>, { type: T }>,
  "type"
>;

type Updater<State, Action> = (state: State, action: Action) => State;
export const component = <
  T extends {
    Props?: object;
    State?: object;
    Action: object;
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
  }) => HtmlElement<ToAction>;
};

export type Action<T> = T extends
  Component<infer Props, infer State, infer Action> ? Action
  : never;

export type HtmlElement<Action> = {
  type: "div";
  children?: HtmlElement<Action>[];
  on?: {
    click?: Action;
  };
} | {
  type: "text";
  content: string;
  on?: {
    change?: Action;
  };
} | {
  type: "button";
  style?: {};
  attr?: {
    value?: string;
  };
  on?: {
    click?: Action;
  };
};

export const mount = <Props extends {}, State, Action>({
  component,
  at,
}: {
  component: ComponentReturnType<Props, State, Action>;
  at: HTMLElement | null;
}) => {
  if (!at) {
    throw new Error(`Root element is undefined`);
  }
  const x = component.render({
    state: component.initialState,
    handle: (x) => x,
    props: {} as any,
  });
  console.log(JSON.stringify(x, null, 2));
};
