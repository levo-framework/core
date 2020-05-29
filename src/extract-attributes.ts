import { VirtualNode } from "./virtual-node.ts"
import { MountedVirtualNode } from "./patch.ts"

export const extractAttributes = <Action>(
  virtualNode: VirtualNode<Action> | MountedVirtualNode<Action>
): Omit<VirtualNode<Action>, 'ref' | 'style' | 'events' | '$' | 'children'> => {
  const { style, events, $, children, ...attributes } = virtualNode
  if ('ref' in attributes) {
    //@ts-ignore
    delete attributes['ref']
  }
  return attributes
}