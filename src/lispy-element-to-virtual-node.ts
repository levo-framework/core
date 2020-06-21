import { LispyElements } from "./lispy-elements.ts";
import { VirtualNode } from "./virtual-node.ts";

/**
 * @deprecated Currently not being used anywhere
 */
export const lispyElementToVirtualNode = <Action>(
  node: LispyElements<Action>,
): VirtualNode<Action> => {
  return {
    $: node[0],
    ...node[1],
    children: node[2]?.filter(Boolean).map((x) =>
      typeof x === "string"
        ? { $: "_text", value: x }
        : lispyElementToVirtualNode(x)
    ),
  } as any;
};
