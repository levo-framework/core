import { LevoElements } from "./levo-element.ts";
import { LispyElements } from "../src/lispy-elements.ts";

export { LevoElements }
export type LevoView<Model, Action> = (model: Model) => LevoElements<Action>;

export const render = <Action>(node: LispyElements<Action>): LevoElements<Action> => {
  return {
    $: node[0],
    ...node[1],
    children: node[2]?.map(x => typeof x === 'string' ? { $: '_text', value: x } : render(x))
  } as any
}

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
