import { Properties } from "./css-types.ts";
import { VirtualNodeEvents } from "./virtual-node-events.ts";

type CommonAttributes<Action> =
  & {
    "accesskey"?: string;
    "autocapitalize"?: string;
    "class"?: string;
    "contenteditable"?: string;
    "contextmenu"?: string;
    "data-*"?: string;
    "dir"?: string;
    "draggable"?: string;
    "dropzone"?: string;
    "hidden"?: string;
    "id"?: string;
    "itemprop"?: string;
    "lang"?: string;
    "slot"?: string;
    "spellcheck"?: string;
    "tabindex"?: string;
    "title"?: string;
    "translate"?: string;
    children?: number[];
  }
  & { style?: Properties }
  & VirtualNodeEvents<Action>;

type Children<Action> = (LispyElements<Action> | string)[];
export type LispyElements<Action> =
  | ["div", CommonAttributes<Action>, Children<Action>?]
  | ["head", CommonAttributes<Action>, Children<Action>?]
  | ["title", CommonAttributes<Action>, Children<Action>?]
  | ["address", CommonAttributes<Action>, Children<Action>?]
  | ["article", CommonAttributes<Action>, Children<Action>?]
  | ["aside", CommonAttributes<Action>, Children<Action>?]
  | ["footer", CommonAttributes<Action>, Children<Action>?]
  | ["header", CommonAttributes<Action>, Children<Action>?]
  | ["h1", CommonAttributes<Action>, Children<Action>?]
  | ["h2", CommonAttributes<Action>, Children<Action>?]
  | ["h3", CommonAttributes<Action>, Children<Action>?]
  | ["h4", CommonAttributes<Action>, Children<Action>?]
  | ["h5", CommonAttributes<Action>, Children<Action>?]
  | ["h6", CommonAttributes<Action>, Children<Action>?]
  | ["hgroup", CommonAttributes<Action>, Children<Action>?]
  | ["main", CommonAttributes<Action>, Children<Action>?]
  | ["nav", CommonAttributes<Action>, Children<Action>?]
  | ["section", CommonAttributes<Action>, Children<Action>?]
  | ["cite", CommonAttributes<Action>, Children<Action>?]
  | ["dd", CommonAttributes<Action>, Children<Action>?]
  | ["dt", CommonAttributes<Action>, Children<Action>?]
  | ["dl", CommonAttributes<Action>, Children<Action>?]
  | ["div", CommonAttributes<Action>, Children<Action>?]
  | ["figcaption", CommonAttributes<Action>, Children<Action>?]
  | ["figure", CommonAttributes<Action>, Children<Action>?]
  | ["p", CommonAttributes<Action>, Children<Action>?]
  | ["pre", CommonAttributes<Action>, Children<Action>?]
  | ["ul", CommonAttributes<Action>, Children<Action>?]
  | ["abbr", CommonAttributes<Action>, Children<Action>?]
  | ["b", CommonAttributes<Action>, Children<Action>?]
  | ["bdi", CommonAttributes<Action>, Children<Action>?]
  | ["bdo", CommonAttributes<Action>, Children<Action>?]
  | ["br", CommonAttributes<Action>, Children<Action>?]
  | ["code", CommonAttributes<Action>, Children<Action>?]
  | ["dfn", CommonAttributes<Action>, Children<Action>?]
  | ["em", CommonAttributes<Action>, Children<Action>?]
  | ["i", CommonAttributes<Action>, Children<Action>?]
  | ["kbd", CommonAttributes<Action>, Children<Action>?]
  | ["mark", CommonAttributes<Action>, Children<Action>?]
  | ["rb", CommonAttributes<Action>, Children<Action>?]
  | ["ruby", CommonAttributes<Action>, Children<Action>?]
  | ["rp", CommonAttributes<Action>, Children<Action>?]
  | ["rt", CommonAttributes<Action>, Children<Action>?]
  | ["rtc", CommonAttributes<Action>, Children<Action>?]
  | ["s", CommonAttributes<Action>, Children<Action>?]
  | ["samp", CommonAttributes<Action>, Children<Action>?]
  | ["small", CommonAttributes<Action>, Children<Action>?]
  | ["span", CommonAttributes<Action>, Children<Action>?]
  | ["strong", CommonAttributes<Action>, Children<Action>?]
  | ["sub", CommonAttributes<Action>, Children<Action>?]
  | ["sup", CommonAttributes<Action>, Children<Action>?]
  | ["u", CommonAttributes<Action>, Children<Action>?]
  | ["var", CommonAttributes<Action>, Children<Action>?]
  | ["wbr", CommonAttributes<Action>, Children<Action>?]
  | ["picture", CommonAttributes<Action>, Children<Action>?]
  | ["noscript", CommonAttributes<Action>, Children<Action>?]
  | ["datalist", CommonAttributes<Action>, Children<Action>?]
  | ["legend", CommonAttributes<Action>, Children<Action>?]
  | ["dialog", CommonAttributes<Action>, Children<Action>?]
  | ["summary", CommonAttributes<Action>, Children<Action>?]
  | ["slot", CommonAttributes<Action>, Children<Action>?]
  | ["template", CommonAttributes<Action>, Children<Action>?]
  | ["html", CommonAttributes<Action>, Children<Action>?]
  | ["acronym", CommonAttributes<Action>, Children<Action>?]
  | ["big", CommonAttributes<Action>, Children<Action>?]
  | ["blink", CommonAttributes<Action>, Children<Action>?]
  | ["center", CommonAttributes<Action>, Children<Action>?]
  | ["content", CommonAttributes<Action>, Children<Action>?]
  | ["dir", CommonAttributes<Action>, Children<Action>?]
  | ["element", CommonAttributes<Action>, Children<Action>?]
  | ["frame", CommonAttributes<Action>, Children<Action>?]
  | ["frameset", CommonAttributes<Action>, Children<Action>?]
  | ["image", CommonAttributes<Action>, Children<Action>?]
  | ["isindex", CommonAttributes<Action>, Children<Action>?]
  | ["listing", CommonAttributes<Action>, Children<Action>?]
  | ["menuitem", CommonAttributes<Action>, Children<Action>?]
  | ["multicol", CommonAttributes<Action>, Children<Action>?]
  | ["nextid", CommonAttributes<Action>, Children<Action>?]
  | ["nobr", CommonAttributes<Action>, Children<Action>?]
  | ["noembed", CommonAttributes<Action>, Children<Action>?]
  | ["noframes", CommonAttributes<Action>, Children<Action>?]
  | ["plaintext", CommonAttributes<Action>, Children<Action>?]
  | ["shadow", CommonAttributes<Action>, Children<Action>?]
  | ["spacer", CommonAttributes<Action>, Children<Action>?]
  | ["strike", CommonAttributes<Action>, Children<Action>?]
  | ["tt", CommonAttributes<Action>, Children<Action>?]
  | ["xmp", CommonAttributes<Action>, Children<Action>?]
  | [
    "form",
    {
      "accept"?: string;
      "accept-charset"?: string;
      "action"?: string;
      "autocomplete"?: string;
      "enctype"?: string;
      "method"?: string;
      "name"?: string;
      "novalidate"?: string;
      "target"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "input",
    & {
      "accept"?: string;
      "alt"?: string;
      "autocomplete"?: string;
      "autofocus"?: string;
      "capture"?: string;
      "checked"?: string;
      "dirname"?: string;
      "disabled"?: string;
      "form"?: string;
      "formaction"?: string;
      "formenctype"?: string;
      "formmethod"?: string;
      "formnovalidate"?: string;
      "formtarget"?: string;
      "height"?: string;
      "list"?: string;
      "max"?: string;
      "maxlength"?: string;
      "minlength"?: string;
      "min"?: string;
      "multiple"?: string;
      "name"?: string;
      "pattern"?: string;
      "placeholder"?: string;
      "readonly"?: string;
      "required"?: string;
      "size"?: string;
      "src"?: string;
      "step"?: string;
      "type"?: string;
      "usemap"?: string;
      "value"?: string;
      "width"?: string;
    }
    & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "applet",
    {
      "align"?: string;
      "alt"?: string;
      "code"?: string;
      "codebase"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "caption",
    {
      "align"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "col",
    {
      "align"?: string;
      "bgcolor"?: string;
      "span"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "colgroup",
    {
      "align"?: string;
      "bgcolor"?: string;
      "span"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "hr",
    {
      "align"?: string;
      "color"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "iframe",
    {
      "align"?: string;
      "allow"?: string;
      "csp"?: string;
      "height"?: string;
      "importance"?: string;
      "loading "?: string;
      "name"?: string;
      "referrerpolicy"?: string;
      "sandbox"?: string;
      "src"?: string;
      "srcdoc"?: string;
      "width"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "img",
    {
      "align"?: string;
      "alt"?: string;
      "border"?: string;
      "crossorigin"?: string;
      "decoding"?: string;
      "height"?: string;
      "importance"?: string;
      "intrinsicsize"?: string;
      "ismap"?: string;
      "loading "?: string;
      "referrerpolicy"?: string;
      "sizes"?: string;
      "src"?: string;
      "srcset"?: string;
      "usemap"?: string;
      "width"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "table",
    {
      "align"?: string;
      "background"?: string;
      "bgcolor"?: string;
      "border"?: string;
      "summary"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "tbody",
    {
      "align"?: string;
      "bgcolor"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "td",
    {
      "align"?: string;
      "background"?: string;
      "bgcolor"?: string;
      "colspan"?: string;
      "headers"?: string;
      "rowspan"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "tfoot",
    {
      "align"?: string;
      "bgcolor"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "th",
    {
      "align"?: string;
      "background"?: string;
      "bgcolor"?: string;
      "colspan"?: string;
      "headers"?: string;
      "rowspan"?: string;
      "scope"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "thead",
    {
      "align"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "tr",
    {
      "align"?: string;
      "bgcolor"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "area",
    {
      "alt"?: string;
      "coords"?: string;
      "download"?: string;
      "href"?: string;
      "hreflang"?: string;
      "media"?: string;
      "ping"?: string;
      "referrerpolicy"?: string;
      "rel"?: string;
      "shape"?: string;
      "target"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "script",
    {
      "async"?: string;
      "charset"?: string;
      "crossorigin"?: string;
      "defer"?: string;
      "importance"?: string;
      "integrity"?: string;
      "language"?: string;
      "referrerpolicy"?: string;
      "src"?: string;
      "type"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "select",
    {
      "autocomplete"?: string;
      "autofocus"?: string;
      "disabled"?: string;
      "form"?: string;
      "multiple"?: string;
      "name"?: string;
      "required"?: string;
      "size"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "textarea",
    {
      "autocomplete"?: string;
      "autofocus"?: string;
      "cols"?: string;
      "dirname"?: string;
      "disabled"?: string;
      "enterkeyhint"?: string;
      "form"?: string;
      "inputmode"?: string;
      "maxlength"?: string;
      "minlength"?: string;
      "name"?: string;
      "placeholder"?: string;
      "readonly"?: string;
      "required"?: string;
      "rows"?: string;
      "wrap"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "button",
    {
      "autofocus"?: string;
      "disabled"?: string;
      "form"?: string;
      "formaction"?: string;
      "formenctype"?: string;
      "formmethod"?: string;
      "formnovalidate"?: string;
      "formtarget"?: string;
      "name"?: string;
      "type"?: string;
      "value"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "keygen",
    {
      "autofocus"?: string;
      "challenge"?: string;
      "disabled"?: string;
      "form"?: string;
      "keytype"?: string;
      "name"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "audio",
    {
      "autoplay"?: string;
      "buffered"?: string;
      "controls"?: string;
      "crossorigin"?: string;
      "loop"?: string;
      "muted"?: string;
      "preload"?: string;
      "src"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "video",
    {
      "autoplay"?: string;
      "buffered"?: string;
      "controls"?: string;
      "crossorigin"?: string;
      "height"?: string;
      "loop"?: string;
      "muted"?: string;
      "poster"?: string;
      "preload"?: string;
      "src"?: string;
      "width"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "body",
    {
      "background"?: string;
      "bgcolor"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "marquee",
    {
      "bgcolor"?: string;
      "loop"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "object",
    {
      "border"?: string;
      "data"?: string;
      "form"?: string;
      "height"?: string;
      "name"?: string;
      "type"?: string;
      "usemap"?: string;
      "width"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "meta",
    {
      "charset"?: string;
      "content"?: string;
      "http-equiv"?: string;
      "name"?: string;
      "property"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "command",
    {
      "checked"?: string;
      "disabled"?: string;
      "icon"?: string;
      "radiogroup"?: string;
      "type"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "blockquote",
    {
      "cite"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "del",
    {
      "cite"?: string;
      "datetime"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "ins",
    {
      "cite"?: string;
      "datetime"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "q",
    {
      "cite"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "basefont",
    {
      "color"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "font",
    {
      "color"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "link",
    {
      "crossorigin"?: string;
      "href"?: string;
      "hreflang"?: string;
      "importance"?: string;
      "integrity"?: string;
      "media"?: string;
      "referrerpolicy"?: string;
      "rel"?: string;
      "sizes"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "time",
    {
      "datetime"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "track",
    {
      "default"?: string;
      "kind"?: string;
      "label"?: string;
      "src"?: string;
      "srclang"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "fieldset",
    {
      "disabled"?: string;
      "form"?: string;
      "name"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "optgroup",
    {
      "disabled"?: string;
      "label"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "option",
    {
      "disabled"?: string;
      "label"?: string;
      "selected"?: string;
      "value"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "a",
    {
      "download"?: string;
      "href"?: string;
      "hreflang"?: string;
      "media"?: string;
      "ping"?: string;
      "referrerpolicy"?: string;
      "rel"?: string;
      "shape"?: string;
      "target"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "contenteditable",
    {
      "enterkeyhint"?: string;
      "inputmode"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "label",
    {
      "for"?: string;
      "form"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "output",
    {
      "for"?: string;
      "form"?: string;
      "name"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "meter",
    {
      "form"?: string;
      "high"?: string;
      "low"?: string;
      "max"?: string;
      "min"?: string;
      "optimum"?: string;
      "value"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "progress",
    {
      "form"?: string;
      "max"?: string;
      "value"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "canvas",
    {
      "height"?: string;
      "width"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "embed",
    {
      "height"?: string;
      "src"?: string;
      "type"?: string;
      "width"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "base",
    {
      "href"?: string;
      "target"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "bgsound",
    {
      "loop"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "html",
    {
      "manifest"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "source",
    {
      "media"?: string;
      "sizes"?: string;
      "src"?: string;
      "srcset"?: string;
      "type"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "style",
    {
      "media"?: string;
      "scoped"?: string;
      "type"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "map",
    {
      "name"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "param",
    {
      "name"?: string;
      "value"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "details",
    {
      "open"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "ol",
    {
      "reversed"?: string;
      "start"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "menu",
    {
      "type"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "data",
    {
      "value"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ]
  | [
    "li",
    {
      "value"?: string;
    } & CommonAttributes<Action>,
    (LispyElements<Action> | string)[]?,
  ];
