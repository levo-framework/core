import { camelToKebab } from "./camel-to-kebab.ts";
import { VirtualNode } from "./virtual-node.ts";

export const renderToString = <Action>(
  virtualNode: VirtualNode<Action>,
): string => {
  switch (virtualNode.$) {
    case "_text":
      return virtualNode.value;

    default: {
      const { $, ref, children, style, ...attributes } = virtualNode;
      const tag = virtualNode.$;
      const childrenString = children?.map(renderToString).join("") || "";
      const attributesAndEventString = (() => {
        const s = Object.entries(attributes ?? {}).map(([key, value]) => {
          if (value === undefined) {
            return "";
          } else if (typeof value === "string") {
            return `${key}='${value}'`;
          } else {
            const eventName = key;
            const action = value;
            return `${eventName}='$$h(${
              JSON.stringify(action).replace(/"([^"]+)":/g, "$1:")
            })'`;
          }
        }).join(" ");
        return s ? ` ${s}` : "";
      })();

      const styleString = (() => {
        const s = Object.entries(style ?? {}).map(([key, value]) => {
          return `${camelToKebab(key)}:${value}`;
        }).join(";");
        return s ? ` style='${s}'` : "";
      })();

      return `<${tag}${attributesAndEventString}${styleString}>${childrenString}</${tag}>`;
    }
  }
};
