type NoMethodsKey<T> = ({[P in keyof T]: T[P] extends Function ? never : P })[keyof T];  
type NoMethods<T> = Pick<T, NoMethodsKey<T>>; 

type IfEquals<X, Y, A=X, B=never> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? A : B;

type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
}[keyof T];

type Writable<T> = Pick<T, WritableKeys<T>>

export type VirtualNode<Action> = (
  & {
    // TODO: use refined type
    events?: Partial<Record<string, Action>>;

    // TODO: use refined type
    style?: Partial<Record<string, string>>;
    children?: VirtualNode<Action>[];
    ref?: undefined
  }
  & ({
    $: "_text" // not a tag, but a text node
    value: string
    children?: undefined
  } | {
    $: "div";
  } | {
    $: "button";
    value?: string;
  } | {
    $: "input";
    value: string;
    children?: undefined
  })
);

