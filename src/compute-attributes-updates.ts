import { arrayDiff } from "./array-diff.ts"

export const computeAttributesUpdates = <Action, OriginalNodeType>({ 
  originalAttrs, 
  updatedAttrs,
  originalNode
}: { 
  originalAttrs: Record<string, string | number>; 
  updatedAttrs: Record<string, string | number> 
  originalNode: OriginalNodeType
}): 
  Array<{
    type: "update_attribute"
    attributeName: string
    value: string
    originalNode: OriginalNodeType
  }
  | {
    type: "remove_attribute"
    attributeName: string
    originalNode: OriginalNodeType
  }> => {

    const originalAttrsKeys = Object.keys(originalAttrs)
    const updatedAttrsKeys = Object.keys(updatedAttrs)
    const addedAttributes = arrayDiff(updatedAttrsKeys, originalAttrsKeys)
    return [
      ...originalAttrsKeys.flatMap<{
        type: "update_attribute"
        attributeName: string
        value: string | number
        originalNode: OriginalNodeType
      } | {
        type: "remove_attribute"
        attributeName: string
        originalNode: OriginalNodeType
      }>(key => {
        const originalValue = (originalAttrs as any)[key]
        const updatedValue = (updatedAttrs as any)[key]
        if(updatedValue === undefined) {
          return [{
            originalNode,
            type: "remove_attribute",
            attributeName: key,
          }]
        }
        else if(originalValue !== updatedValue) {
          return [{
            originalNode,
            type: "update_attribute",
            attributeName: key,
            value: updatedValue
          }]
        }
        else {
          return []
        }
      }),
      ...addedAttributes.map(key => {
        return {
          originalNode,
          type: "update_attribute" as const,
          attributeName: key,
          value: (updatedAttrs as any)[key]
        }
      })
    ]
}