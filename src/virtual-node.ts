/**
 * Note: 'on*' and '*' do not represent the actual type, they are just to ease typechecking on 
 *      levo-runtime.ts
 */
export type VirtualNode<Action> = (
  | {
    $: "_text"; // not a tag, but a text node
    value: string;

    style?: undefined;
    children?: undefined;
    ref?: undefined;
    "on*"?: undefined;
    "*"?: undefined;
  }
  | ({
    $: "_other";

    style?: Partial<Record<string, string>>;
    children?: VirtualNode<Action>[];
    ref?: undefined;
    "*"?: string;
  })
);
