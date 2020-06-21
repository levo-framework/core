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

  export type Init<Model, Action> = (args: {
    model: Model;
    dispatch: (action: Action) => void;
  }) => void;

  export type Update<Model, Action> = (args: {
    model: Model;
    action: Action;
    event?: unknown;
  }) => {
    newModel: Model;
    then?: () => Promise<Action>;
  };

  export const register = <Model, Action>({
    init,
    view,
    update,
  }: {
    init: Levo.Init<Model, Action>;
    view: (
      args: { model: Model; dispatch: Levo.Dispatch<Action> },
    ) => Levo.Element;
    update: Levo.Update<Model, Action>;
  }) => {
    //@ts-ignore
    if (typeof window !== undefined) {
      // This is to prevent Deno from throwing error when some Worker tried to execute
      // this code, because `window` object does not exists in Worker scope
      try {
        //@ts-ignore
        window.$levoInit = init;
        //@ts-ignore
        window.$levoView = view;
        //@ts-ignore
        window.$levoUpdater = update;
      } catch {}
    }
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
