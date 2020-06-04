export type ActionCreator<T extends { $: string }> = {
  [K in T["$"]]: {} extends Omit<Extract<T, { $: K }>, "$"> ? () => T
    : (args: Omit<Extract<T, { $: K }>, "$">) => T;
};

export const actionCreator = <Action extends { $: string }>(): ActionCreator<
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
