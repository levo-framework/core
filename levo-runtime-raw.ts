export const levoRuntimeCode = `
// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiateAsync, __instantiate;

(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };

  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }

  __instantiateAsync = async (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExpA(m);
  };

  __instantiate = (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExp(m);
  };
})();

System.register("virtual-node", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("patch", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("array-diff", [], function (exports_3, context_3) {
    "use strict";
    var arrayDiff;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            /**
             */
            exports_3("arrayDiff", arrayDiff = (left, right) => {
                let cache = {};
                const rightLength = right.length;
                for (let i = 0; i < rightLength; i++) {
                    cache[right[i]] = true;
                }
                let diff = [];
                const leftLength = left.length;
                for (let i = 0; i < leftLength; i++) {
                    const y = left[i];
                    if (!cache[y]) {
                        diff.push(y);
                    }
                }
                return diff;
            });
        }
    };
});
// Modified from: https://raw.githubusercontent.com/epoberezkin/fast-deep-equal/master/src/index.jst
System.register("deep-equal", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    //@ts-nocheck
    function deepEqual(a, b) {
        if (a === b)
            return true;
        if (a && b && typeof a === "object" && typeof b === "object") {
            if (a.constructor !== b.constructor)
                return false;
            var length, i, keys;
            if (Array.isArray(a)) {
                length = a.length;
                if (length != b.length)
                    return false;
                for (i = length; i-- !== 0;) {
                    if (!deepEqual(a[i], b[i]))
                        return false;
                }
                return true;
            }
            if ((a instanceof Map) && (b instanceof Map)) {
                if (a.size !== b.size)
                    return false;
                for (i of a.entries()) {
                    if (!b.has(i[0]))
                        return false;
                }
                for (i of a.entries()) {
                    if (!deepEqual(i[1], b.get(i[0])))
                        return false;
                }
                return true;
            }
            if ((a instanceof Set) && (b instanceof Set)) {
                if (a.size !== b.size)
                    return false;
                for (i of a.entries()) {
                    if (!b.has(i[0]))
                        return false;
                }
                return true;
            }
            if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
                length = a.length;
                if (length != b.length)
                    return false;
                for (i = length; i-- !== 0;) {
                    if (a[i] !== b[i])
                        return false;
                }
                return true;
            }
            if (a.constructor === RegExp) {
                return a.source === b.source && a.flags === b.flags;
            }
            if (a.valueOf !== Object.prototype.valueOf) {
                return a.valueOf() === b.valueOf();
            }
            if (a.toString !== Object.prototype.toString) {
                return a.toString() === b.toString();
            }
            keys = Object.keys(a);
            length = keys.length;
            if (length !== Object.keys(b).length)
                return false;
            for (i = length; i-- !== 0;) {
                if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
                    return false;
            }
            for (i = length; i-- !== 0;) {
                var key = keys[i];
                if (!deepEqual(a[key], b[key]))
                    return false;
            }
            return true;
        }
        // true if both NaN, false otherwise
        return a !== a && b !== b;
    }
    exports_4("deepEqual", deepEqual);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("compute-attributes-updates", ["array-diff", "deep-equal"], function (exports_5, context_5) {
    "use strict";
    var array_diff_ts_1, deep_equal_ts_1, computeAttributesUpdates;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (array_diff_ts_1_1) {
                array_diff_ts_1 = array_diff_ts_1_1;
            },
            function (deep_equal_ts_1_1) {
                deep_equal_ts_1 = deep_equal_ts_1_1;
            }
        ],
        execute: function () {
            exports_5("computeAttributesUpdates", computeAttributesUpdates = ({ originalAttrs, updatedAttrs, }) => {
                const originalAttrsKeys = Object.keys(originalAttrs);
                const updatedAttrsKeys = Object.keys(updatedAttrs);
                const addedAttributes = array_diff_ts_1.arrayDiff(updatedAttrsKeys, originalAttrsKeys);
                return [
                    ...originalAttrsKeys.flatMap((key) => {
                        const originalValue = originalAttrs[key];
                        const updatedValue = updatedAttrs[key];
                        if (updatedValue === undefined) {
                            return [{
                                    type: "remove_attribute",
                                    attributeName: key,
                                }];
                        }
                        else if (!deep_equal_ts_1.deepEqual(originalValue, updatedValue)) {
                            return [{
                                    type: "update_attribute",
                                    attributeName: key,
                                    value: updatedValue,
                                }];
                        }
                        else {
                            return [];
                        }
                    }),
                    ...addedAttributes.flatMap((key) => {
                        const value = updatedAttrs[key];
                        if (value) {
                            return [{
                                    type: "update_attribute",
                                    attributeName: key,
                                    value,
                                }];
                        }
                        else {
                            return [];
                        }
                    }),
                ];
            });
        }
    };
});
System.register("extract-attributes", [], function (exports_6, context_6) {
    "use strict";
    var extractAttributes;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [],
        execute: function () {
            exports_6("extractAttributes", extractAttributes = (virtualNode) => {
                const { style, $, children, ...attributes } = virtualNode;
                if ("ref" in attributes) {
                    //@ts-ignore
                    delete attributes["ref"];
                }
                return attributes;
            });
        }
    };
});
System.register("virtual-node-diff", ["compute-attributes-updates", "extract-attributes"], function (exports_7, context_7) {
    "use strict";
    var compute_attributes_updates_ts_1, extract_attributes_ts_1, diff;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (compute_attributes_updates_ts_1_1) {
                compute_attributes_updates_ts_1 = compute_attributes_updates_ts_1_1;
            },
            function (extract_attributes_ts_1_1) {
                extract_attributes_ts_1 = extract_attributes_ts_1_1;
            }
        ],
        execute: function () {
            exports_7("diff", diff = ({ original, updated, parentVirtualNode, }) => {
                if (original.$ !== updated.$ ||
                    (original.$ === "_text" && updated.$ === "_text" &&
                        updated.value !== original.value)) {
                    return [{
                            type: "replace_node",
                            updatedVirtualNode: updated,
                            originalNode: original,
                            parentVirtualNode,
                        }];
                }
                else {
                    // Compare attributes
                    const originalAttrs = extract_attributes_ts_1.extractAttributes(original);
                    const updatedAttrs = extract_attributes_ts_1.extractAttributes(updated);
                    const attributesUpdates = compute_attributes_updates_ts_1.computeAttributesUpdates({
                        originalAttrs,
                        updatedAttrs,
                    })
                        .map((update) => ({
                        originalNode: original,
                        ...update,
                    }));
                    // Compare styles
                    const styleAttributesUpdates = compute_attributes_updates_ts_1.computeAttributesUpdates({
                        // Reference: https://github.com/microsoft/TypeScript/pull/29317
                        originalAttrs: original.style ??
                            {},
                        updatedAttrs: updated.style ?? {},
                    })
                        .map((update) => {
                        switch (update.type) {
                            case "remove_attribute":
                                return {
                                    ...update,
                                    originalNode: original,
                                    type: "remove_style_attribute",
                                };
                            case "update_attribute":
                                return {
                                    ...update,
                                    originalNode: original,
                                    type: "update_style_attribute",
                                };
                        }
                    });
                    // Compare child
                    // TODO: use optimized diff algorithm
                    // Now is using naive method
                    const addedChildren = updated.children?.slice(original.children?.length ?? 0) ?? [];
                    const removedChildren = original.children?.slice(updated.children?.length ?? 0)
                        .map((child) => child.ref) ?? [];
                    const originalChildrenLength = original.children?.length ?? 0;
                    const updatedChildrenLength = updated.children?.length ?? 0;
                    const minLength = originalChildrenLength < updatedChildrenLength
                        ? originalChildrenLength
                        : updatedChildrenLength;
                    const childrenUpdates = original.children?.slice(0, minLength)
                        .flatMap((child, index) => {
                        const updatedChild = updated.children?.[index];
                        if (updatedChild) {
                            return diff({
                                original: child,
                                updated: updatedChild,
                                parentVirtualNode: original,
                            });
                        }
                        else {
                            return [];
                        }
                    }) ?? [];
                    return [
                        ...attributesUpdates,
                        ...styleAttributesUpdates,
                        ...childrenUpdates,
                        ...addedChildren.map((child) => ({
                            type: "add_node",
                            virtualNode: child,
                            originalNode: original,
                        })),
                        ...removedChildren.map((nodeToBeRemoved) => ({
                            type: "remove_node",
                            nodeToBeRemoved,
                            originalNode: original,
                        })),
                    ];
                }
            });
        }
    };
});
System.register("set-event-handler", [], function (exports_8, context_8) {
    "use strict";
    var setEventHandler;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            exports_8("setEventHandler", setEventHandler = ({ element, eventName, action, }) => {
                if (action !== undefined) {
                    element.setAttribute(eventName, \`$$h('\${btoa(JSON.stringify(action))}')\`);
                }
            });
        }
    };
});
System.register("mount", ["extract-attributes", "set-event-handler"], function (exports_9, context_9) {
    "use strict";
    var extract_attributes_ts_2, set_event_handler_ts_1, mount;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (extract_attributes_ts_2_1) {
                extract_attributes_ts_2 = extract_attributes_ts_2_1;
            },
            function (set_event_handler_ts_1_1) {
                set_event_handler_ts_1 = set_event_handler_ts_1_1;
            }
        ],
        execute: function () {
            exports_9("mount", mount = ({ virtualNode }) => {
                if (virtualNode.$ === "_text") {
                    const node = document.createTextNode(virtualNode.value);
                    return { node, virtualNode: { ...virtualNode, ref: node } };
                }
                const node = document.createElement(virtualNode.$);
                const attributes = extract_attributes_ts_2.extractAttributes(virtualNode);
                Object.entries(attributes).map(([key, value]) => {
                    if (value) {
                        if (typeof value === "string") {
                            node.setAttribute(key, value);
                        }
                        else {
                            set_event_handler_ts_1.setEventHandler({ element: node, eventName: key, action: value });
                        }
                    }
                });
                Object.entries(virtualNode.style ?? {}).forEach(([key, value]) => {
                    if (value) {
                        node.style[key] = value;
                    }
                });
                const updatedVirtualNode = {
                    ...virtualNode,
                    children: virtualNode.children?.map((childVirtualNode) => {
                        const { node: childNode, virtualNode } = mount({ virtualNode: childVirtualNode });
                        node.appendChild(childNode); // side-effect
                        return virtualNode;
                    }),
                    ref: node,
                };
                return { node, virtualNode: updatedVirtualNode };
            });
        }
    };
});
System.register("apply-patches", ["mount", "set-event-handler"], function (exports_10, context_10) {
    "use strict";
    var mount_ts_1, set_event_handler_ts_2, applyPatches;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (mount_ts_1_1) {
                mount_ts_1 = mount_ts_1_1;
            },
            function (set_event_handler_ts_2_1) {
                set_event_handler_ts_2 = set_event_handler_ts_2_1;
            }
        ],
        execute: function () {
            /**
             * This function will mutate DOM and mountedVirtualNode
             */
            exports_10("applyPatches", applyPatches = ({ patches, mountedVirtualNode, }) => {
                return patches.reduce((updatedMountedVirtualNode, patch) => {
                    switch (patch.type) {
                        case "add_node": {
                            const { virtualNode, node } = mount_ts_1.mount({ virtualNode: patch.virtualNode });
                            patch.originalNode.ref.appendChild(node);
                            patch.originalNode.children?.push(virtualNode);
                            return updatedMountedVirtualNode;
                        }
                        case "remove_node": {
                            patch.originalNode.ref.removeChild(patch.nodeToBeRemoved);
                            const index = patch.originalNode.children
                                ?.findIndex((child) => child.ref === patch.nodeToBeRemoved) ?? 0;
                            if (index > -1) {
                                patch.originalNode.children?.splice(index, 1);
                            }
                            return updatedMountedVirtualNode;
                        }
                        case "replace_node": {
                            const { virtualNode, node } = mount_ts_1.mount({ virtualNode: patch.updatedVirtualNode });
                            patch.originalNode.ref.parentElement?.replaceChild(node, patch.originalNode.ref);
                            if (!patch.parentVirtualNode) {
                                return virtualNode;
                            }
                            else if (patch.parentVirtualNode.children) {
                                const index = patch.parentVirtualNode.children
                                    ?.findIndex((child) => child.ref === patch.originalNode.ref);
                                patch.parentVirtualNode.children[index] = virtualNode;
                                return updatedMountedVirtualNode;
                            }
                            else {
                                return updatedMountedVirtualNode;
                            }
                        }
                        case "update_attribute": {
                            if (typeof patch.value === "string") {
                                if (patch.attributeName.startsWith('data-')) {
                                    patch.originalNode.ref.setAttribute?.(patch.attributeName, patch.value);
                                }
                                else {
                                    patch.originalNode.ref[patch.attributeName] = patch.value;
                                }
                            }
                            else { // must be event update
                                set_event_handler_ts_2.setEventHandler({
                                    element: patch.originalNode.ref,
                                    eventName: patch.attributeName,
                                    action: patch.value,
                                });
                            }
                            patch.originalNode[patch.attributeName] = patch.value;
                            return updatedMountedVirtualNode;
                        }
                        case "remove_attribute": {
                            if (patch.attributeName.startsWith('data-')) {
                                patch.originalNode.ref.removeAttribute?.(patch.attributeName);
                            }
                            else {
                                patch.originalNode.ref[patch.attributeName] = undefined;
                            }
                            delete patch.originalNode[patch.attributeName];
                            return updatedMountedVirtualNode;
                        }
                        case "update_style_attribute": {
                            patch.originalNode.ref.style[patch.attributeName] = patch.value;
                            patch.originalNode.style[patch.attributeName] = patch.value;
                            return updatedMountedVirtualNode;
                        }
                        case "remove_style_attribute": {
                            patch.originalNode.ref.style[patch.attributeName] = undefined;
                            delete patch.originalNode.style[patch.attributeName];
                            return updatedMountedVirtualNode;
                        }
                        default:
                            return updatedMountedVirtualNode;
                    }
                }, mountedVirtualNode);
            });
        }
    };
});
System.register("css-types", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("virtual-node-events", [], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("lispy-elements", [], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("lispy-element-to-virtual-node", [], function (exports_14, context_14) {
    "use strict";
    var lispyElementToVirtualNode;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [],
        execute: function () {
            exports_14("lispyElementToVirtualNode", lispyElementToVirtualNode = (node) => {
                return {
                    $: node[0],
                    ...node[1],
                    children: node[2]?.map((x) => typeof x === "string"
                        ? { $: "_text", value: x }
                        : lispyElementToVirtualNode(x)),
                };
            });
        }
    };
});
System.register("levo-runtime", ["virtual-node-diff", "mount", "apply-patches", "lispy-element-to-virtual-node"], function (exports_15, context_15) {
    "use strict";
    var virtual_node_diff_ts_1, mount_ts_2, apply_patches_ts_1, lispy_element_to_virtual_node_ts_1, start;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (virtual_node_diff_ts_1_1) {
                virtual_node_diff_ts_1 = virtual_node_diff_ts_1_1;
            },
            function (mount_ts_2_1) {
                mount_ts_2 = mount_ts_2_1;
            },
            function (apply_patches_ts_1_1) {
                apply_patches_ts_1 = apply_patches_ts_1_1;
            },
            function (lispy_element_to_virtual_node_ts_1_1) {
                lispy_element_to_virtual_node_ts_1 = lispy_element_to_virtual_node_ts_1_1;
            }
        ],
        execute: function () {
            start = ({ at, view, update, initialModel, onMount, }) => {
                if (!at) {
                    throw new Error("Root element is undefined");
                }
                let { node, virtualNode: currentVirtualNode } = mount_ts_2.mount({
                    virtualNode: view(initialModel),
                });
                let currentModel = initialModel;
                // Make root node child-less
                if (at.firstElementChild) {
                    at.removeChild(at.firstElementChild);
                }
                at.appendChild(node);
                const handler = (action) => {
                    const event = window.event;
                    if (action) {
                        const { newModel, then: promise } = update(currentModel, action, event);
                        const newVirtualNode = view(newModel);
                        console.log("action", action);
                        const patches = virtual_node_diff_ts_1.diff({
                            original: currentVirtualNode,
                            updated: newVirtualNode,
                            parentVirtualNode: undefined,
                        });
                        currentVirtualNode = apply_patches_ts_1.applyPatches({
                            patches,
                            mountedVirtualNode: currentVirtualNode,
                        });
                        console.log("patches", patches);
                        // console.log("currentVirtualNode", currentVirtualNode)
                        currentModel = newModel;
                        promise?.().then(handler);
                    }
                };
                onMount(currentModel, handler);
                //@ts-ignore
                window.$$h = (action) => handler(JSON.parse(atob(action)));
            };
            //@ts-ignore
            if (!window.$levoView) {
                throw new Error("You might have forgot to call Levo.registerView at levo.view.ts");
            }
            //@ts-ignore
            if (!window.$levoUpdater) {
                throw new Error("You might have forgot to call Levo.registerUpdater at levo.updater.ts");
            }
            start({
                at: document,
                //@ts-ignore
                initialModel: window.$levoModel,
                //@ts-ignore
                view: (model) => lispy_element_to_virtual_node_ts_1.lispyElementToVirtualNode(window.$levoView(model)),
                //@ts-ignore
                update: window.$levoUpdater,
                //@ts-ignore
                onMount: window.$levoInit,
            });
        }
    };
});

__instantiate("levo-runtime");


`
