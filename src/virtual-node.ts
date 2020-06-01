import { AllElements } from './html-attributes-type.ts';

// TODO: use refined type
export type VirtualNodeEvents<Action> = Record<string, Action>

// TODO: use refined type
export type VirtualNodeStyle = Partial<Record<string, string>>

export type VirtualNode<Action> = (
  & {
    events?: VirtualNodeEvents<Action>
    style?: VirtualNodeStyle
    children?: VirtualNode<Action>[];
    ref?: undefined
  }
  & (
    {
    $: "_text" // not a tag, but a text node
    value: string
    children?: undefined
    } 
    | 
    AllElements
  )

);

