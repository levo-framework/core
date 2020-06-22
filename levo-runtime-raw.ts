export const levoRuntimeCode =
  `"use strict";function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _toArray(e){return _arrayWithHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableRest()}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function asyncGeneratorStep(e,t,r,n,o,i,a){try{var u=e[i](a),l=u.value}catch(e){return void r(e)}u.done?t(l):Promise.resolve(l).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){asyncGeneratorStep(i,n,o,a,u,"next",e)}function u(e){asyncGeneratorStep(i,n,o,a,u,"throw",e)}a(void 0)}))}}var System,_instantiate;!function(){var e=new Map;function t(){return(t=_asyncToGenerator(regeneratorRuntime.mark((function t(r,n){var i,a,u,l,c,s,d,f,p,v,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(i=r.replace(/\.\w+$/i,"")).includes("./")){t.next=18;break}a=i.split("/").reverse(),u=_toArray(a),l=u[0],c=u.slice(1),s=n.split("/").reverse(),d=_toArray(s),f=d.slice(1),p=[l],v=0;case 4:if(!(y=c.shift())){t.next=16;break}if(".."!==y){t.next=9;break}v++,t.next=14;break;case 9:if("."!==y){t.next=13;break}return t.abrupt("break",16);case 13:p.push(y);case 14:t.next=4;break;case 16:v<f.length&&p.push.apply(p,_toConsumableArray(f.slice(v))),i=p.reverse().join("/");case 18:return t.abrupt("return",e.has(i)?o(i):Promise.resolve("".concat(r)).then((function(e){return _interopRequireWildcard(require(e))})));case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(e,r){return{id:e,import:function(r){return function(e,r){return t.apply(this,arguments)}(r,e)},meta:{url:e,main:r}}}function n(e){return function(t,r){r="string"==typeof t?_defineProperty({},t,r):t;for(var n=0,o=Object.entries(r);n<o.length;n++){var i=_slicedToArray(o[n],2),a=i[0],u=i[1];Object.defineProperty(e,a,{value:u,writable:!0,enumerable:!0})}}}function o(e){return i.apply(this,arguments)}function i(){return(i=_asyncToGenerator(regeneratorRuntime.mark((function t(r){var n,i,a,u,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.has(r)){t.next=2;break}return t.abrupt("return");case 2:if(!(n=e.get(r)).s){t.next=22;break}i=n.d,a=n.e,u=n.s,delete n.s,delete n.e,l=0;case 8:if(!(l<u.length)){t.next=18;break}return t.t0=u,t.t1=l,t.next=13,o(i[l]);case 13:t.t2=t.sent,t.t0[t.t1].call(t.t0,t.t2);case 15:l++,t.next=8;break;case 18:if(!(c=a())){t.next=22;break}return t.next=22,c;case 22:return t.abrupt("return",n.exp);case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}System={register:function(t,r,n){e.set(t,{d:r,f:n,exp:{}})}},_instantiate=function(t,i){return System=_instantiate=void 0,function(t){var o,i=_createForOfIteratorHelper(e.entries());try{for(i.s();!(o=i.n()).done;){var a=_slicedToArray(o.value,2),u=a[0],l=a[1],c=(0,l.f)(n(l.exp),r(u,u===t)),s=c.execute,d=c.setters;delete l.f,l.e=s,l.s=d}}catch(e){i.e(e)}finally{i.f()}}(t),i?o(t):function t(r){if(e.has(r)){var n=e.get(r);if(n.s){var o=n.d,i=n.e,a=n.s;delete n.s,delete n.e;for(var u=0;u<a.length;u++)a[u](t(o[u]));i()}return n.exp}}(t)}}(),System.register("src/virtual-node",[],(function(e,t){t&&t.id;return{setters:[],execute:function(){}}})),System.register("src/patch",[],(function(e,t){t&&t.id;return{setters:[],execute:function(){}}})),System.register("src/array-diff",[],(function(e,t){t&&t.id;return{setters:[],execute:function(){e("arrayDiff",(function(e,t){for(var r={},n=t.length,o=0;o<n;o++)r[t[o]]=!0;for(var i=[],a=e.length,u=0;u<a;u++){var l=e[u];r[l]||i.push(l)}return i}))}}})),System.register("src/deep-equal",[],(function(e,t){t&&t.id;return e("deepEqual",(function e(t,r){if(t===r)return!0;if(t&&r&&"object"===_typeof(t)&&"object"===_typeof(r)){if(t.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;var a,u=_createForOfIteratorHelper(t.entries());try{for(u.s();!(a=u.n()).done;)if(o=a.value,!r.has(o[0]))return!1}catch(e){u.e(e)}finally{u.f()}var l,c=_createForOfIteratorHelper(t.entries());try{for(c.s();!(l=c.n()).done;)if(!e((o=l.value)[1],r.get(o[0])))return!1}catch(e){c.e(e)}finally{c.f()}return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;var s,d=_createForOfIteratorHelper(t.entries());try{for(d.s();!(s=d.n()).done;)if(o=s.value,!r.has(o[0]))return!1}catch(e){d.e(e)}finally{d.f()}return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(t[o]!==r[o])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(i=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var f=i[o];if(!e(t[f],r[f]))return!1}return!0}return t!=t&&r!=r})),{setters:[],execute:function(){}}})),System.register("src/compute-attributes-updates",["src/array-diff","src/deep-equal"],(function(e,t){var r,n;t&&t.id;return{setters:[function(e){r=e},function(e){n=e}],execute:function(){e("computeAttributesUpdates",(function(e){var t=e.originalAttrs,o=e.updatedAttrs,i=Object.keys(t),a=Object.keys(o),u=r.arrayDiff(a,i);return[].concat(_toConsumableArray(i.flatMap((function(e){var r=t[e],i=o[e];return void 0===i?[{type:"remove_attribute",attributeName:e}]:n.deepEqual(r,i)?[]:[{type:"update_attribute",attributeName:e,value:i}]}))),_toConsumableArray(u.flatMap((function(e){var t=o[e];return t?[{type:"update_attribute",attributeName:e,value:t}]:[]}))))}))}}})),System.register("src/extract-attributes",[],(function(e,t){t&&t.id;return{setters:[],execute:function(){e("extractAttributes",(function(e){e.style,e.$,e.children;var t=_objectWithoutProperties(e,["style","$","children"]);return"ref"in t&&delete t.ref,t}))}}})),System.register("src/virtual-node-diff",["src/compute-attributes-updates","src/extract-attributes"],(function(e,t){var r,n,o;t&&t.id;return{setters:[function(e){r=e},function(e){n=e}],execute:function(){e("diff",o=function(e){var t=e.original,i=e.updated,a=e.parentVirtualNode;if(t.$!==i.$||"_text"===t.$&&"_text"===i.$&&i.value!==t.value)return[{type:"replace_node",updatedVirtualNode:i,originalNode:t,parentVirtualNode:a}];var u,l,c,s,d,f,p,v,y,b,m,h,g,_,w,N,S=n.extractAttributes(t),A=n.extractAttributes(i),j=r.computeAttributesUpdates({originalAttrs:S,updatedAttrs:A}).map((function(e){return _objectSpread({originalNode:t},e)})),O=r.computeAttributesUpdates({originalAttrs:null!==(u=t.style)&&void 0!==u?u:{},updatedAttrs:null!==(l=i.style)&&void 0!==l?l:{}}).map((function(e){switch(e.type){case"remove_attribute":return _objectSpread(_objectSpread({},e),{},{originalNode:t,type:"remove_style_attribute"});case"update_attribute":return _objectSpread(_objectSpread({},e),{},{originalNode:t,type:"update_style_attribute"})}})),x=null!==(c=null===(s=i.children)||void 0===s?void 0:s.slice(null!==(d=null===(f=t.children)||void 0===f?void 0:f.length)&&void 0!==d?d:0))&&void 0!==c?c:[],P=null!==(p=null===(v=t.children)||void 0===v?void 0:v.slice(null!==(y=null===(b=i.children)||void 0===b?void 0:b.length)&&void 0!==y?y:0).map((function(e){return e.ref})))&&void 0!==p?p:[],T=null!==(m=null===(h=t.children)||void 0===h?void 0:h.length)&&void 0!==m?m:0,I=null!==(g=null===(_=i.children)||void 0===_?void 0:_.length)&&void 0!==g?g:0,k=T<I?T:I,$=null!==(w=null===(N=t.children)||void 0===N?void 0:N.slice(0,k).flatMap((function(e,r){var n,a=null===(n=i.children)||void 0===n?void 0:n[r];return a?o({original:e,updated:a,parentVirtualNode:t}):[]})))&&void 0!==w?w:[];return[].concat(_toConsumableArray(j),_toConsumableArray(O),_toConsumableArray($),_toConsumableArray(x.map((function(e){return{type:"add_node",virtualNode:e,originalNode:t}}))),_toConsumableArray(P.map((function(e){return{type:"remove_node",nodeToBeRemoved:e,originalNode:t}}))))})}}})),System.register("src/set-event-handler",[],(function(e,t){t&&t.id;return{setters:[],execute:function(){e("setEventHandler",(function(e){var t=e.element,r=e.eventName,n=e.action;void 0!==n&&(t[r]=function(){return $$h(n)})}))}}})),System.register("src/mount",["src/extract-attributes","src/set-event-handler"],(function(e,t){var r,n,o;t&&t.id;return{setters:[function(e){r=e},function(e){n=e}],execute:function(){e("mount",o=function(e){var t,i,a=e.virtualNode;if("_text"===a.$){var u=document.createTextNode(a.value);return{node:u,virtualNode:_objectSpread(_objectSpread({},a),{},{ref:u})}}var l=document.createElement(a.$),c=r.extractAttributes(a);Object.entries(c).map((function(e){var t=_slicedToArray(e,2),r=t[0],o=t[1];o&&("string"==typeof o?l.setAttribute(r,o):n.setEventHandler({element:l,eventName:r,action:o}))})),Object.entries(null!==(t=a.style)&&void 0!==t?t:{}).forEach((function(e){var t=_slicedToArray(e,2),r=t[0],n=t[1];n&&(l.style[r]=n)}));var s=_objectSpread(_objectSpread({},a),{},{children:null===(i=a.children)||void 0===i?void 0:i.map((function(e){var t=o({virtualNode:e}),r=t.node,n=t.virtualNode;return l.appendChild(r),n})),ref:l});return{node:l,virtualNode:s}})}}})),System.register("src/apply-patches",["src/mount","src/set-event-handler"],(function(e,t){var r,n;t&&t.id;return{setters:[function(e){r=e},function(e){n=e}],execute:function(){e("applyPatches",(function(e){var t=e.patches,o=e.mountedVirtualNode;return t.reduce((function(e,t){switch(t.type){case"add_node":var o,i=r.mount({virtualNode:t.virtualNode}),a=i.virtualNode,u=i.node;return t.originalNode.ref.appendChild(u),null===(o=t.originalNode.children)||void 0===o||o.push(a),e;case"remove_node":var l,c;t.originalNode.ref.removeChild(t.nodeToBeRemoved);var s,d=null!==(l=null===(c=t.originalNode.children)||void 0===c?void 0:c.findIndex((function(e){return e.ref===t.nodeToBeRemoved})))&&void 0!==l?l:0;if(d>-1)null===(s=t.originalNode.children)||void 0===s||s.splice(d,1);return e;case"replace_node":var f,p=r.mount({virtualNode:t.updatedVirtualNode}),v=p.virtualNode,y=p.node;if(null===(f=t.originalNode.ref.parentElement)||void 0===f||f.replaceChild(y,t.originalNode.ref),t.parentVirtualNode){if(t.parentVirtualNode.children){var b,m=null===(b=t.parentVirtualNode.children)||void 0===b?void 0:b.findIndex((function(e){return e.ref===t.originalNode.ref}));return t.parentVirtualNode.children[m]=v,e}return e}return v;case"update_attribute":var h,g;if("string"==typeof t.value)if(t.attributeName.startsWith("data-"))null===(h=(g=t.originalNode.ref).setAttribute)||void 0===h||h.call(g,t.attributeName,t.value);else"class"===t.attributeName?t.originalNode.ref.className=t.value:t.originalNode.ref[t.attributeName]=t.value;else n.setEventHandler({element:t.originalNode.ref,eventName:t.attributeName,action:t.value});return t.originalNode[t.attributeName]=t.value,e;case"remove_attribute":var _,w;if(t.attributeName.startsWith("data-"))null===(_=(w=t.originalNode.ref).removeAttribute)||void 0===_||_.call(w,t.attributeName);else"class"===t.attributeName?t.originalNode.ref.className="":t.originalNode.ref[t.attributeName]=void 0;return delete t.originalNode[t.attributeName],e;case"update_style_attribute":return t.originalNode.ref.style[t.attributeName]=t.value,t.originalNode.style[t.attributeName]=t.value,e;case"remove_style_attribute":return t.originalNode.ref.style[t.attributeName]=void 0,delete t.originalNode.style[t.attributeName],e;default:return e}}),o)}))}}})),System.register("src/css-types",[],(function(e,t){t&&t.id;return{setters:[],execute:function(){}}})),System.register("src/virtual-node-events",[],(function(e,t){t&&t.id;return{setters:[],execute:function(){}}})),System.register("src/lispy-elements",[],(function(e,t){t&&t.id;return{setters:[],execute:function(){}}})),System.register("mod/levo-view",[],(function(e,t){var r;t&&t.id;return{setters:[],execute:function(){!function(e){e.register=function(e){var t=e.init,r=e.view,n=e.update;if(void 0!==("undefined"==typeof window?"undefined":_typeof(window)))try{window.$levoInit=t,window.$levoView=r,window.$levoUpdater=n}catch(e){}}}(r||(r={})),e("Levo",r),e("h",(function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return"function"==typeof e?e(_objectSpread(_objectSpread({},t),{},{children:n})):_objectSpread(_objectSpread({$:e},t),{},{children:null==n?void 0:n.filter((function(e){return null!=e})).map((function(e){return["string","number"].includes(_typeof(e))?{$:"_text",value:e}:e})).flat()})})),e("createDispatch",(function(){return function(e){return e}}))}}})),System.register("src/levo-runtime",["src/virtual-node-diff","src/mount","src/apply-patches","mod/levo-view"],(function(e,t){var r,n,o,i,a;t&&t.id;return{setters:[function(e){r=e},function(e){n=e},function(e){o=e},function(e){i=e}],execute:function(){if(a=function(e){var t=e.at,i=e.view,a=e.update,u=e.initialModel,l=e.onMount;if(!t)throw new Error("Root element is undefined");var c=n.mount({virtualNode:i(u)}),s=c.node,d=c.virtualNode,f=u;t.firstElementChild&&t.removeChild(t.firstElementChild),t.appendChild(s);var p=function e(t){var n=window.event;if(t){var u=a({model:f,action:t,event:n}),l=u.newModel,c=u.then,s=i(l);console.log("action",t);var p=r.diff({original:d,updated:s,parentVirtualNode:void 0});d=o.applyPatches({patches:p,mountedVirtualNode:d}),console.log("patches",p),f=l,null==c||c().then(e)}};l({model:f,dispatch:p}),window.$$h=p},!window.$levoView)throw new Error("You might have forgot to call Levo.registerView at levo.view.ts");if(!window.$levoUpdater)throw new Error("You might have forgot to call Levo.registerUpdater at levo.updater.ts");a({at:document,initialModel:window.$levoModel,view:function(e){return window.$levoView({model:e,dispatch:i.createDispatch()})},update:window.$levoUpdater,onMount:window.$levoInit})}}})),_instantiate("src/levo-runtime",!1);`;
