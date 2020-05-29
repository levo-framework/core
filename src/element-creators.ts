import { VirtualNode } from "./virtual-node.ts";

export type ElementCreators<Action> = {
  text: (value: string) => {
    $: "_text" // not a tag, but a text node
    value: string
  }
  div: ElementCreator<Action, "div">;
  button: ElementCreator<Action, "button">;
  input: ElementCreator<Action, "input">;
};

type ElementCreator<Action, T extends VirtualNode<Action>["$"]> = (
  props: Omit<Prop<Action, T>, 'children'>,
  children?: VirtualNode<Action>[],
) => VirtualNode<Action>;

type Prop<Action, T extends VirtualNode<Action>["$"]> = Omit<
  Extract<VirtualNode<Action>, { $: T }>,
  "$"
>;

export const elementCreators = <Action>(): ElementCreators<Action> => {
  return {
    text: (value) => ({
      $: '_text',
      value
    }),
    div: (props, children) => ({
      $: "div",
      ...props,
      children,
    }),
    button: (props, children) => ({
      $: "button",
      ...props,
      children,
    }),
    input: (props, children) => ({
      $: "input",
      ...props,
    }),
  };
};