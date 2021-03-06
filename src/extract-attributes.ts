import { VirtualNode } from "./virtual-node.ts";
import { MountedVirtualNode } from "./patch.ts";

export const extractAttributes = <Action>(
  virtualNode: VirtualNode<Action> | MountedVirtualNode<Action>,
): Omit<VirtualNode<Action>, "ref" | "style" | "events" | "$" | "children"> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style, $, children, ...attributes } = virtualNode;
  if ("ref" in attributes) {
    delete attributes["ref"];
  }
  return attributes;
};
