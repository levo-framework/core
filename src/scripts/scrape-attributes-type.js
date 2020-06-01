/**
 * This script is for scrapping attribute-element relations 
 * from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

//@ts-nocheck
(() => {
  const data = Array.from(document.getElementsByTagName('tr')).slice(1).map(tr => {
    const td1 = tr.children[0]
    const a = td1.children[0]?.children[0]
    const elements = tr.children[1].innerText.replace(/(<|>|,)/g, '').split(' ')
    const description = tr.children[2].innerText
    return {
      attributeName: a?.innerText ?? td1.innerText,
      link: a?.href,
      elements,
      description
    }
  })

  const elements = data
    .flatMap(({ attributeName, elements }) => elements.map(element => ({ element, attributeName })))
    .reduce((result, { attributeName, element }) => {
      if (!element) return result
      return {
        ...result,
        [element]: [...(result[element] ?? []), attributeName]
      }
    }, {})
  const attrTypeName = attr => `Attribute_${attr.replace(/(-|\*)/g, '_')}`
  const elementTypes = Object.entries(elements)
    .map(([element, attributes]) => {
      return `
type Element_${element} = 
  & { $: '${element}' }
${attributes.map(attr => `  & ${attrTypeName(attr)}`).join('\n')}

`.trim()
    })
    .join('\n\n')
  const attributeTypes = data.map(({
    attributeName,
    link,
    elements,
    description
  }) => {
    return `
type ${attrTypeName(attributeName)} = {
  /**
${description.split('\n').map(d => '   * ' + d.trim()).join('\n')}  
   * ${link ? `Reference: ${link}` : ''}
   */
  '${attributeName}'?: string
}`
  })
    .join('\n')
  const allElements = `
export type AllElements = 
${Object.keys(elements).map(element =>
    `  | Element_${element}`
  ).join('\n')}

`

  return allElements + elementTypes + '\n' + attributeTypes
})()