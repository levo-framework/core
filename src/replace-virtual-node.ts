import { MountedVirtualNode } from "./virtual-node.ts";

export const replaceVirtualNode = <Action>({
  mountedVirtualNode,
  at: ref,
  replaceWith,
}: {
  mountedVirtualNode: MountedVirtualNode<Action>;
  at: Node;
  replaceWith: MountedVirtualNode<Action>;
}): MountedVirtualNode<Action> => {
  if (mountedVirtualNode.ref === ref) {
    return replaceWith;
  } else {
    return {
      ...mountedVirtualNode,
      children: mountedVirtualNode.children?.reduce<{
        updated: boolean;
        children: MountedVirtualNode<Action>[];
      }>(({ updated, children }, child) => {
        if (updated) {
          return {
            children: [...children, child],
            updated,
          };
        } else {
          const updatedChild = replaceVirtualNode({
            mountedVirtualNode: child,
            at: ref,
            replaceWith,
          });
          return {
            children: [...children, updatedChild],
            updated: updatedChild === replaceWith,
          };
        }
      }, { updated: false, children: [] }).children,
    };
  }
};
