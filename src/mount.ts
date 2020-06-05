import { VirtualNode } from "./virtual-node.ts";
import { MountedVirtualNode } from "./patch.ts";
import { extractAttributes } from "./extract-attributes.ts";
import { setEventHandler } from "./set-event-handler.ts";

export const mount = <Action>({ virtualNode }: {
  virtualNode: VirtualNode<Action>;
}): {
  node: Node;
  virtualNode: MountedVirtualNode<Action>;
} => {
  if (virtualNode.$ === "_text") {
    const node = document.createTextNode(virtualNode.value as string);
    return { node, virtualNode: { ...virtualNode, ref: node } };
  }
  const node = document.createElement(virtualNode.$);

  const attributes = extractAttributes(virtualNode);
  Object.entries(attributes).map(([key, value]) => {
    if (value) {
      if (typeof value === "string") {
        node.setAttribute(key, value as string);
      } else {
        setEventHandler({ element: node, eventName: key, action: value });
      }
    }
  });
  Object.entries(virtualNode.style ?? {}).forEach(([key, value]) => {
    if (value) {
      node.style[key as any] = value;
    }
  });
  const updatedVirtualNode = {
    ...virtualNode,
    children: virtualNode.children?.map((childVirtualNode) => {
      const { node: childNode, virtualNode } = mount(
        { virtualNode: childVirtualNode },
      );
      node.appendChild(childNode); // side-effect
      return virtualNode;
    }),
    ref: node,
  };
  return { node, virtualNode: updatedVirtualNode };
};
