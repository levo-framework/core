import { MountedVirtualNode } from "./patch.ts";
import { VirtualNode } from "./virtual-node.ts";
import { Patch } from "./patch.ts";
import { computeAttributesUpdates } from "./compute-attributes-updates.ts";
import { extractAttributes } from "./extract-attributes.ts";

export const diff = <Action>({
  original,
  updated,
  parentVirtualNode
}: {
  original: MountedVirtualNode<Action>;
  updated: VirtualNode<Action>;
  parentVirtualNode: MountedVirtualNode<Action> | undefined
}): Patch<Action>[] => {
  if (
    original.$ !== updated.$
    ||
    (original.$ === '_text' && updated.$ === '_text'
      && updated.value !== (original as any).value)
  ) {
    return [{
      type: 'replace_node',
      updatedVirtualNode: updated,
      originalNode: original,
      parentVirtualNode
    }]
  }
  else {
    // Compare attributes
    const originalAttrs = extractAttributes(original)
    const updatedAttrs = extractAttributes(updated)
    const attributesUpdates = computeAttributesUpdates<string>({
      originalAttrs,
      updatedAttrs,
    })
      .map(update => ({
        originalNode: original,
        ...update,
      }))

    // Compare styles
    const styleAttributesUpdates = computeAttributesUpdates<string | undefined>({
      originalAttrs: original.style ?? {},
      updatedAttrs: updated.style ?? {}
    })
      .map<Patch<Action>>(update => {
        switch (update.type) {
          case 'remove_attribute':
            return {
              ...update,
              originalNode: original,
              type: 'remove_style_attribute'
            }

          case 'update_attribute':
            return {
              ...update,
              originalNode: original,
              type: 'update_style_attribute'
            }
        }
      })


    // Compare event handlers
    const eventAttributesUpdates = computeAttributesUpdates<Action | undefined>({
      originalAttrs: original.events ?? {},
      updatedAttrs: updated.events ?? {}
    })
      .map<Patch<Action>>(update => {
        switch (update.type) {
          case 'remove_attribute':
            return {
              originalNode: original,
              type: 'remove_event_attribute',
              attributeName: update.attributeName
            }

          case 'update_attribute':
            return {
              originalNode: original,
              type: 'update_event_attribute',
              attributeName: update.attributeName,
              action: update.value
            }
        }
      })

    // Compare child
    // TODO: use optimized diff algorithm 
    // Now is using naive method

    const addedChildren = updated.children?.slice(original.children?.length ?? 0) ?? []
    const removedChildren = original.children?.slice(updated.children?.length ?? 0)
      .map(child => child.ref) ?? []

    const originalChildrenLength = original.children?.length ?? 0
    const updatedChildrenLength = updated.children?.length ?? 0
    const minLength = originalChildrenLength < updatedChildrenLength
      ? originalChildrenLength
      : updatedChildrenLength

    const childrenUpdates = original.children?.slice(0, minLength)
      .flatMap((child, index) => {
        const updatedChild = updated.children?.[index]
        if (updatedChild) {
          return diff({
            original: child,
            updated: updatedChild,
            parentVirtualNode: original
          })
        }
        else {
          return []
        }
      }) ?? []


    return [
      ...attributesUpdates,
      ...styleAttributesUpdates,
      ...eventAttributesUpdates,
      ...childrenUpdates,
      ...addedChildren.map(child => ({
        type: "add_node" as const,
        virtualNode: child,
        originalNode: original
      })),
      ...removedChildren.map(nodeToBeRemoved => ({
        type: 'remove_node' as const,
        nodeToBeRemoved,
        originalNode: original,
      }))
    ]
  }
};
