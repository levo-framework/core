import { camelToKebab } from './camel-to-kebab.ts';
import { VirtualNode } from './virtual-node.ts';

export const renderToString = <Action>(virtualNode: VirtualNode<Action>): string => {
  switch (virtualNode.$) {
    case '_text':
      return virtualNode.value

    default: {
      const { $, ref, children, style, events, ...attributes } = virtualNode
      const tag = virtualNode.$
      const childrenString = children?.map(renderToString).join('') || ''
      const attributesString = (() => {
        const s = Object.entries(attributes ?? {}).map(([key, value]) => {
          return `${key}='${value}'`
        }).join(' ')
        return s ? ` ${s}` : ''
      })()

      const styleString = (() => {
        const s = Object.entries(style ?? {}).map(([key, value]) => {
          return `${camelToKebab(key)}:${value}`
        }).join(';')
        return s ? ` style='${s}'` : ''
      })()

      const eventsString = (() => {
        const s = Object.entries(events ?? {}).map(([eventName, action]) => {
          return action
            ? `${"on" + eventName}='$$h(${JSON.stringify(action).replace(/"([^"]+)":/g, '$1:')})'`
            : ''
        }).join(' ')
        return s ? ` ${s}` : ''
      })()

      return `<${tag}${attributesString}${styleString}${eventsString}>${childrenString}</${tag}>`
    }
  }
}