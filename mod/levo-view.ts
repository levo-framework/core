import { LispyElements } from "../src/lispy-elements.ts";
import { Properties } from "../src/css-types.ts";
import { VirtualNodeEvents } from "../src/virtual-node-events.ts";
import { VirtualNode } from "../src/virtual-node.ts";

export namespace Levo {
  export type EventHandler = { $: "$" };
  export type Element = VirtualNode<Levo.EventHandler>;
  export type CSSProperties = Properties;
  export type Events<Action> = VirtualNodeEvents<Action>;
  export type Dispatchable = { $: string }
  export type Dispatch<T extends Dispatchable> = {
    [K in T["$"]]: {} extends Omit<Extract<T, { $: K }>, "$">
    ? () => Levo.EventHandler
    : (args: Omit<Extract<T, { $: K }>, "$">) => Levo.EventHandler;
  };

  export type Update<Model, Action> = (
    model: Model,
    action: Action,
    event: unknown,
  ) => {
    newModel: Model;
    then?: () => Promise<Action>;
  };

  export const $ = <Action>(
    tag: string | Function,
    props: object,
    ...children: any[]
  ): Element => {
    if (typeof tag === "function") {
      return tag({ ...props, children: children });
    } else {
      return {
        $: tag,
        ...props,
        children: children?.filter(x => x !== undefined && x !== null).map((x) =>
          ["string", "number"].includes(typeof x) ? { $: "_text", value: x } : x
        ).flat(),
      } as any;
    }
  };

  export const mapDispatch = <
    FromAction extends Levo.Dispatchable,
    ToAction extends Levo.Dispatchable
  >(
    $: Levo.Dispatch<FromAction>,
    wrap: (action: ToAction) => FromAction
  ): Levo.Dispatch<ToAction> => {
    return new Proxy({}, {
      get: function (target, key, receiver) {
        return (props: any) => {
          return wrap({
            $: key,
            ...props,
          });
        };
      },
    }) as any;
  }

}

export namespace React {
  export const createElement = Levo.$;
}

export const render = (
  node: Levo.Element,
): Levo.Element => {
  return node;
};


export const createDispatch = <Action extends { $: string }>(): Levo.Dispatch<
  Action
> => {
  return new Proxy({}, {
    get: function (target, key, receiver) {
      return (props: any) => {
        return {
          $: key,
          ...props,
        };
      };
    },
  }) as any;
};

declare global {
  namespace JSX {
    type IntrinsicElements<Action> = {
      [P in Tag<Action>]: Props<P>;
    }

    type Element = Levo.Element

    // type ElementChildrenAttribute = { children?: any[]; }
  }
}

type Tag<Action> = LispyElements<Action>[0];
type Props<T> = Extract<
  LispyElements<Levo.EventHandler>,
  { 0: T }
>[1];
