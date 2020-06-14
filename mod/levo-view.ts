import { LispyElements } from "../src/lispy-elements.ts";
import { Properties } from "../src/css-types.ts";
import { VirtualNodeEvents } from "../src/virtual-node-events.ts";

export namespace Levo {
  export type Element<Action> = LispyElements<Action>;
  export type CSSProperties = Properties;
  export type Events<Action> = VirtualNodeEvents<Action>;
}

export const render = <Action>(
  node: Levo.Element<Action>,
): Levo.Element<Action> => {
  return node;
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
