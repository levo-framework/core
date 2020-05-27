/// <reference lib="dom" />
export type VirtualNode<Action> = (
  & {
    events?: Partial<Record<keyof HTMLElementEventMap, Action>>;
    style?: Partial<CSSStyleDeclaration>;
    children?: VirtualNode<Action>[];
    ref?: undefined
  }
  & ({
    $: "_text" // not a tag, but a text node
    value: string
    children?: undefined
  } | {
    $: "div";
  } | {
    $: "button";
    value?: string;
  } | {
    $: "input";
    value: string;
    children?: undefined
  })
);

export type MountedVirtualNode<Action> = Omit<VirtualNode<Action>, 'ref' | 'children'> & {
  ref: Node
  children?: MountedVirtualNode<Action>[]
}
