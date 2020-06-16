import { LispyElements } from "../src/lispy-elements.ts";
import { Properties } from "../src/css-types.ts";
import { VirtualNodeEvents } from "../src/virtual-node-events.ts";
import { VirtualNode } from "../src/virtual-node.ts";

export namespace Levo {
  export type EventHandler = { $: "$" };
  export type Element<Action> = VirtualNode<Action>;
  export type CSSProperties = Properties;
  export type Events<Action> = VirtualNodeEvents<Action>;
  export const $ = <Action>(
    tag: string | Function,
    props: object,
    ...children: any[]
  ): Element<Action> => {
    if (typeof tag === "function") {
      return tag({ ...props, children: children });
    } else {
      return {
        $: tag,
        ...props,
        children: children?.filter(Boolean).map((x) =>
          typeof x === "string" ? { $: "_text", value: x } : x
        ).flat(),
      } as any;
    }
  };
}

export namespace React {
  export const createElement = Levo.$;
}

export const render = <Action>(
  node: Levo.Element<Action>,
): Levo.Element<Action> => {
  return node;
};

export type ActionCreator<T extends { $: string }> = {
  [K in T["$"]]: {} extends Omit<Extract<T, { $: K }>, "$">
    ? () => Levo.EventHandler
    : (args: Omit<Extract<T, { $: K }>, "$">) => Levo.EventHandler;
};

export const createActions = <Action extends { $: string }>(): ActionCreator<
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
    type IntrinsicElements = {
      [P in Tag]: Props<P>;
    };
  }
}

type Tag = LispyElements<Levo.EventHandler>[0];
type Props<T extends Tag> = Extract<
  LispyElements<Levo.EventHandler>,
  { 0: T }
>[1];
