import { Patch, MountedVirtualNode } from "./patch.ts"
import { mount } from "./mount.ts"
import { setEventHandler } from "./set-event-handler.ts"

/**
 * This function will mutate DOM and `mountedVirtualNode`
 */
export const applyPatches = <Action>({
  patches,
  mountedVirtualNode
}: {
  patches: Patch<Action>[];
  mountedVirtualNode: MountedVirtualNode<Action>
}): MountedVirtualNode<Action> => {
  return patches.reduce((updatedMountedVirtualNode, patch) => {
    switch (patch.type) {
      case 'add_node': {
        const { virtualNode, node } = mount({ virtualNode: patch.virtualNode })
        patch.originalNode.ref.appendChild(node)
        patch.originalNode.children?.push(virtualNode)
        return updatedMountedVirtualNode
      }
      case 'remove_node': {
        patch.originalNode.ref.removeChild(patch.nodeToBeRemoved)
        const index = patch.originalNode.children
          ?.findIndex(child => child.ref === patch.nodeToBeRemoved) ?? 0
        if (index > -1) {
          patch.originalNode.children?.splice(index, 1)
        }
        return updatedMountedVirtualNode
      }
      case 'replace_node': {
        const { virtualNode, node } = mount({ virtualNode: patch.updatedVirtualNode })
        patch.originalNode.ref.parentElement?.replaceChild(node, patch.originalNode.ref)
        if (!patch.parentVirtualNode) {
          return virtualNode
        }
        else if (patch.parentVirtualNode.children) {
          const index = patch.parentVirtualNode.children
            ?.findIndex(child => child.ref === patch.originalNode.ref)
          patch.parentVirtualNode.children[index] = virtualNode
          return updatedMountedVirtualNode
        }
        else {
          return updatedMountedVirtualNode
        }
      }
      case 'update_attribute': {
        (patch.originalNode.ref as HTMLElement).setAttribute?.(patch.attributeName, patch.value);
        (patch.originalNode as any)[patch.attributeName] = patch.value
        return updatedMountedVirtualNode
      }
      case 'remove_attribute': {
        (patch.originalNode.ref as HTMLElement).removeAttribute?.(patch.attributeName)
        delete (patch.originalNode as any)[patch.attributeName]
        return updatedMountedVirtualNode
      }
      case 'update_style_attribute': {
        ((patch.originalNode.ref as HTMLElement).style as any)[patch.attributeName] =
          patch.value;
        (patch.originalNode.style as any)[patch.attributeName]  = patch.value
        return updatedMountedVirtualNode
      }
      case 'remove_style_attribute': {
        ((patch.originalNode.ref as HTMLElement).style as any)[patch.attributeName] = undefined
        delete (patch.originalNode.style as any)[patch.attributeName]
        return updatedMountedVirtualNode
      }
      case 'update_event_attribute': {
        if(patch.action) {
          setEventHandler(
            ((patch.originalNode.ref as HTMLElement)),
            patch.attributeName,
            patch.action
          );
          (patch.originalNode.events as any)[patch.attributeName] = patch.action 
        };
        return updatedMountedVirtualNode
      }
      case 'remove_event_attribute': {
        (patch.originalNode.ref as HTMLElement).removeAttribute("on" + patch.attributeName)
        delete (patch.originalNode.events as any)[patch.attributeName]
        return updatedMountedVirtualNode
      }
      default:
        return updatedMountedVirtualNode
    }
  }, mountedVirtualNode)
}
