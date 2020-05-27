import { VirtualNode, MountedVirtualNode } from './virtual-node.ts';

export type Patch<Action> = 
& {
  originalNode: MountedVirtualNode<Action>
} & (
| {
  type: "replace_node";
  updatedVirtualNode: VirtualNode<Action>;
  parentVirtualNode: MountedVirtualNode<Action> | undefined
} 
| {
  type: "add_node";
  virtualNode: VirtualNode<Action>;
} 
| {
  type: "update_attribute"
  attributeName: string
  value: string
}
| {
  type: "remove_attribute"
  attributeName: string
}
| {
  type: "remove_node";
  nodeToBeRemoved: Node
});