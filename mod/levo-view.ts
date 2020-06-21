import { LispyElements } from "../src/lispy-elements.ts";
import { Properties } from "../src/css-types.ts";
import { VirtualNodeEvents } from "../src/virtual-node-events.ts";
import { VirtualNode } from "../src/virtual-node.ts";

export namespace Levo {
  export type EventHandler = string & { _: "ev" }; // branded type
  export type Element = VirtualNode<Levo.EventHandler>;
  export type CSSProperties = Properties;
  export type Events<Action> = VirtualNodeEvents<Action>;
  export type Dispatch<Action> = (action: Action) => EventHandler;

  export type Init<Model, Action> = (
    model: Model,
    dispatch: (action: Action) => void,
  ) => void;

  export type Update<Model, Action> = (args: {
    model: Model;
    action: Action;
    event?: unknown;
  }) => {
    newModel: Model;
    then?: () => Promise<Action>;
  };

  export const mapDispatch = <FromAction, ToAction>(
    dispatch: Levo.Dispatch<FromAction>,
    wrap: (action: ToAction) => FromAction,
  ): Levo.Dispatch<ToAction> => {
    return (action) => dispatch(wrap(action));
  };
}

export const h = (
  tag: string | Function,
  props: object,
  ...children: any[]
): Levo.Element => {
  if (typeof tag === "function") {
    return tag({ ...props, children: children });
  } else {
    return {
      $: tag,
      ...props,
      children: children?.filter((x) => x !== undefined && x !== null).map((
        x,
      ) =>
        ["string", "number"].includes(typeof x) ? { $: "_text", value: x } : x
      ).flat(),
    } as any;
  }
};

export const createDispatch = <Action>(): Levo.Dispatch<Action> => {
  return (x) => x as any;
};

declare global {
  namespace JSX {
    type IntrinsicElements<Action> = {
      [P in Tag<Action>]: Props<P>;
    };

    type Element = Levo.Element;

    // type ElementChildrenAttribute = { children?: any[]; }
  }
}

type Tag<Action> = LispyElements<Action>[0];
type Props<T> = Extract<
  LispyElements<Levo.EventHandler>,
  { 0: T }
>[1];
