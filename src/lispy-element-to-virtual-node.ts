import { LispyElements } from "./lispy-elements.ts";
import { VirtualNode } from "./virtual-node.ts";

export const lispyElementToVirtualNode = <Action>(
  node: LispyElements<Action>,
): VirtualNode<Action> => {
  console.log(node);
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
