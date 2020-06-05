import { LispyElements } from "../src/lispy-elements.ts";
import { VirtualNode } from "../src/virtual-node.ts";
import { Properties } from "../src/css-types.ts";
import { VirtualNodeEvents } from "../src/virtual-node-events.ts";

export namespace Levo {
  export type Element<Action> = VirtualNode<Action>;
  export type CSSProperties = Properties;
  export type Events<Action> = VirtualNodeEvents<Action>;
}

export const render = <Action>(
  node: LispyElements<Action>,
): Levo.Element<Action> => {
  return {
    $: node[0],
    ...node[1],
    children: node[2]?.map((x) =>
      typeof x === "string" ? { $: "_text", value: x } : render(x)
    ),
  } as any;
};

export type ActionCreator<T extends { $: string }> = {
  [K in T["$"]]: {} extends Omit<Extract<T, { $: K }>, "$"> ? () => T
    : (args: Omit<Extract<T, { $: K }>, "$">) => T;
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
