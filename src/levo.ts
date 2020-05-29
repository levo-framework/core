import { VirtualNode } from './virtual-node.ts';

export type LevoView<Model, Action> = (model: Model) => VirtualNode<Action>

export type LevoUpdater<Model, Action> = (model: Model, action: Action, event: any) => Model

export const Levo = <Model, Action>() => {
  return {
    registerView: (view: LevoView<Model, Action>) => {
      //@ts-ignore
      window.$levoView = view
    },
    registerUpdater: (updater: LevoUpdater<Model, Action>) => {
      //@ts-ignore
      window.$levoUpdater = updater
    }
  }
}