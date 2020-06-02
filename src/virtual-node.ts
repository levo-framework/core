import { Properties } from "./css-types.ts";
import { AllElements } from "./html-attributes-type.ts";
import { VirtualNodeEvents } from "./virtual-node-events.ts";

export type VirtualNodeStyle = Properties;

export type VirtualNode<Action> = (
  & VirtualNodeEvents<Action>
  & {
    style?: VirtualNodeStyle;
    children?: VirtualNode<Action>[];
    ref?: undefined;
  }
  & (
    | {
      $: "_text"; // not a tag, but a text node
      value: string;
      children?: undefined;
    }
    | AllElements
  )
);
