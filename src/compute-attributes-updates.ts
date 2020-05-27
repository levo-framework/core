import { arrayDiff } from "./array-diff.ts"
import { deepEqual } from "./deep-equal.ts"

export const computeAttributesUpdates = <RecordReturnType>({ 
  originalAttrs, 
  updatedAttrs,
}: { 
  originalAttrs: Record<string, RecordReturnType>
  updatedAttrs: Record<string, RecordReturnType> 
}): 
  Array<{
    type: "update_attribute"
    attributeName: string
    value: RecordReturnType
  }
  | {
    type: "remove_attribute"
    attributeName: string
  }> => {

    const originalAttrsKeys = Object.keys(originalAttrs)
    const updatedAttrsKeys = Object.keys(updatedAttrs)
    const addedAttributes = arrayDiff(updatedAttrsKeys, originalAttrsKeys)
    return [
      ...originalAttrsKeys.flatMap<{
        type: "update_attribute"
        attributeName: string
        value: RecordReturnType
      } | {
        type: "remove_attribute"
        attributeName: string
      }>(key => {
        const originalValue = originalAttrs[key]
        const updatedValue = updatedAttrs[key]
        if(updatedValue === undefined) {
          return [{
            type: "remove_attribute",
            attributeName: key,
          }]
        }
        else if(!deepEqual(originalValue, updatedValue)) {
          return [{
            type: "update_attribute",
            attributeName: key,
            value: updatedValue
          }]
        }
        else {
          return []
        }
      }),
      ...addedAttributes.flatMap(key => {
        const value = updatedAttrs[key]
        if(value) {
          return [{
            type: "update_attribute" as const,
            attributeName: key,
            value
          }]
        }
        else {
          return []
        }
      })
    ]
}