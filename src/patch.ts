import { VirtualNode } from './virtual-node.ts';

export type MountedVirtualNode<Action> = Omit<VirtualNode<Action>, 'ref' | 'children'> & {
  ref: Node
  children?: MountedVirtualNode<Action>[]
}
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
  type: "remove_node";
  nodeToBeRemoved: Node
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
  type: "update_style_attribute"
  attributeName: string
  value: string | undefined
}
| {
  type: "remove_style_attribute"
  attributeName: string
}
| {
  type: "update_event_attribute"
  attributeName: string
  action: Action | undefined
}
| {
  type: "remove_event_attribute"
  attributeName: string
})