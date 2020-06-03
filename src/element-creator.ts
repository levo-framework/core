import {
  GlobalAttributes,
  Element_base,
  Element_link,
  Element_meta,
  Element_script,
  Element_style,
  Element_body,
  Element_blockquote,
  Element_hr,
  Element_li,
  Element_ol,
  Element_a,
  Element_data,
  Element_time,
  Element_q,
  Element_del,
  Element_ins,
  Element_area,
  Element_map,
  Element_audio,
  Element_source,
  Element_img,
  Element_track,
  Element_video,
  Element_embed,
  Element_iframe,
  Element_object,
  Element_param,
  Element_canvas,
  Element_caption,
  Element_col,
  Element_colgroup,
  Element_table,
  Element_tbody,
  Element_tr,
  Element_td,
  Element_tfoot,
  Element_th,
  Element_thead,
  Element_button,
  Element_option,
  Element_fieldset,
  Element_label,
  Element_form,
  Element_input,
  Element_meter,
  Element_optgroup,
  Element_select,
  Element_output,
  Element_progress,
  Element_textarea,
  Element_details,
  Element_menu,
  Element_applet,
  Element_basefont,
  Element_bgsound,
  Element_command,
  Element_font,
  Element_keygen,
  Element_marquee,
} from "./html-attributes-type.ts";
import {
  VirtualNode,
  VirtualNodeStyle,
} from "./virtual-node.ts";
import { VirtualNodeEvents } from "./virtual-node-events.ts";

export type ElementCreators<Action> = {
  html: ElementCreator<Action, {}>;
  base: ElementCreator<Action, Element_base>;
  head: ElementCreator<Action, {}>;
  link: ElementCreator<Action, Element_link>;
  meta: ElementCreator<Action, Element_meta>;
  script: ElementCreator<Action, Element_script>;
  style: ElementCreator<Action, Element_style>;
  title: ElementCreator<Action, {}>;
  body: ElementCreator<Action, Element_body>;
  address: ElementCreator<Action, {}>;
  article: ElementCreator<Action, {}>;
  aside: ElementCreator<Action, {}>;
  footer: ElementCreator<Action, {}>;
  header: ElementCreator<Action, {}>;
  h1: ElementCreator<Action, {}>;
  h2: ElementCreator<Action, {}>;
  h3: ElementCreator<Action, {}>;
  h4: ElementCreator<Action, {}>;
  h5: ElementCreator<Action, {}>;
  h6: ElementCreator<Action, {}>;
  hgroup: ElementCreator<Action, {}>;
  main: ElementCreator<Action, {}>;
  nav: ElementCreator<Action, {}>;
  section: ElementCreator<Action, {}>;
  blockquote: ElementCreator<Action, Element_blockquote>;
  cite: ElementCreator<Action, {}>;
  dd: ElementCreator<Action, {}>;
  dt: ElementCreator<Action, {}>;
  dl: ElementCreator<Action, {}>;
  div: ElementCreator<Action, {}>;
  figcaption: ElementCreator<Action, {}>;
  figure: ElementCreator<Action, {}>;
  hr: ElementCreator<Action, Element_hr>;
  li: ElementCreator<Action, Element_li>;
  ol: ElementCreator<Action, Element_ol>;
  p: ElementCreator<Action, {}>;
  pre: ElementCreator<Action, {}>;
  ul: ElementCreator<Action, {}>;
  a: ElementCreator<Action, Element_a>;
  abbr: ElementCreator<Action, {}>;
  b: ElementCreator<Action, {}>;
  bdi: ElementCreator<Action, {}>;
  bdo: ElementCreator<Action, {}>;
  br: ElementCreator<Action, {}>;
  code: ElementCreator<Action, {}>;
  data: ElementCreator<Action, Element_data>;
  time: ElementCreator<Action, Element_time>;
  dfn: ElementCreator<Action, {}>;
  em: ElementCreator<Action, {}>;
  i: ElementCreator<Action, {}>;
  kbd: ElementCreator<Action, {}>;
  mark: ElementCreator<Action, {}>;
  q: ElementCreator<Action, Element_q>;
  rb: ElementCreator<Action, {}>;
  ruby: ElementCreator<Action, {}>;
  rp: ElementCreator<Action, {}>;
  rt: ElementCreator<Action, {}>;
  rtc: ElementCreator<Action, {}>;
  s: ElementCreator<Action, {}>;
  del: ElementCreator<Action, Element_del>;
  ins: ElementCreator<Action, Element_ins>;
  samp: ElementCreator<Action, {}>;
  small: ElementCreator<Action, {}>;
  span: ElementCreator<Action, {}>;
  strong: ElementCreator<Action, {}>;
  sub: ElementCreator<Action, {}>;
  sup: ElementCreator<Action, {}>;
  u: ElementCreator<Action, {}>;
  var: ElementCreator<Action, {}>;
  wbr: ElementCreator<Action, {}>;
  area: ElementCreator<Action, Element_area>;
  map: ElementCreator<Action, Element_map>;
  audio: ElementCreator<Action, Element_audio>;
  source: ElementCreator<Action, Element_source>;
  img: ElementCreator<Action, Element_img>;
  track: ElementCreator<Action, Element_track>;
  video: ElementCreator<Action, Element_video>;
  embed: ElementCreator<Action, Element_embed>;
  iframe: ElementCreator<Action, Element_iframe>;
  object: ElementCreator<Action, Element_object>;
  param: ElementCreator<Action, Element_param>;
  picture: ElementCreator<Action, {}>;
  canvas: ElementCreator<Action, Element_canvas>;
  noscript: ElementCreator<Action, {}>;
  caption: ElementCreator<Action, Element_caption>;
  col: ElementCreator<Action, Element_col>;
  colgroup: ElementCreator<Action, Element_colgroup>;
  table: ElementCreator<Action, Element_table>;
  tbody: ElementCreator<Action, Element_tbody>;
  tr: ElementCreator<Action, Element_tr>;
  td: ElementCreator<Action, Element_td>;
  tfoot: ElementCreator<Action, Element_tfoot>;
  th: ElementCreator<Action, Element_th>;
  thead: ElementCreator<Action, Element_thead>;
  button: ElementCreator<Action, Element_button>;
  datalist: ElementCreator<Action, {}>;
  option: ElementCreator<Action, Element_option>;
  fieldset: ElementCreator<Action, Element_fieldset>;
  label: ElementCreator<Action, Element_label>;
  form: ElementCreator<Action, Element_form>;
  input: ElementCreator<Action, Element_input>;
  legend: ElementCreator<Action, {}>;
  meter: ElementCreator<Action, Element_meter>;
  optgroup: ElementCreator<Action, Element_optgroup>;
  select: ElementCreator<Action, Element_select>;
  output: ElementCreator<Action, Element_output>;
  progress: ElementCreator<Action, Element_progress>;
  textarea: ElementCreator<Action, Element_textarea>;
  details: ElementCreator<Action, Element_details>;
  dialog: ElementCreator<Action, {}>;
  menu: ElementCreator<Action, Element_menu>;
  summary: ElementCreator<Action, {}>;
  slot: ElementCreator<Action, {}>;
  template: ElementCreator<Action, {}>;
  acronym: ElementCreator<Action, {}>;
  applet: ElementCreator<Action, Element_applet>;
  basefont: ElementCreator<Action, Element_basefont>;
  bgsound: ElementCreator<Action, Element_bgsound>;
  big: ElementCreator<Action, {}>;
  blink: ElementCreator<Action, {}>;
  center: ElementCreator<Action, {}>;
  command: ElementCreator<Action, Element_command>;
  content: ElementCreator<Action, {}>;
  dir: ElementCreator<Action, {}>;
  element: ElementCreator<Action, {}>;
  font: ElementCreator<Action, Element_font>;
  frame: ElementCreator<Action, {}>;
  frameset: ElementCreator<Action, {}>;
  image: ElementCreator<Action, {}>;
  isindex: ElementCreator<Action, {}>;
  keygen: ElementCreator<Action, Element_keygen>;
  listing: ElementCreator<Action, {}>;
  marquee: ElementCreator<Action, Element_marquee>;
  menuitem: ElementCreator<Action, {}>;
  multicol: ElementCreator<Action, {}>;
  nextid: ElementCreator<Action, {}>;
  nobr: ElementCreator<Action, {}>;
  noembed: ElementCreator<Action, {}>;
  noframes: ElementCreator<Action, {}>;
  plaintext: ElementCreator<Action, {}>;
  shadow: ElementCreator<Action, {}>;
  spacer: ElementCreator<Action, {}>;
  strike: ElementCreator<Action, {}>;
  tt: ElementCreator<Action, {}>;
  xmp: ElementCreator<Action, {}>;
};

type ElementCreator<Action, T> = (
  props:
    & Omit<T, "$">
    & GlobalAttributes
    & VirtualNodeEvents<Action>
    & { style?: VirtualNodeStyle },
  ...children: (VirtualNode<Action> | string)[]
) => VirtualNode<Action>;

const convertChildren = <Action>(
  children: (VirtualNode<Action> | string)[],
): VirtualNode<Action>[] => {
  return children.map((child) =>
    typeof child === "string" ? { $: "_text", value: child } : child
  );
};
export const elementCreator = <Action>(): ElementCreators<Action> => {
  return new Proxy({}, {
    get: function (target, key, receiver) {
      return (props: any, ...children: (VirtualNode<Action> | string)[]) => {
        return {
          $: key,
          ...props,
          children: convertChildren(children),
        };
      };
    },
  }) as any;
};
