import { VirtualNode } from './virtual-node.ts';

export type LevoView<Model, Action> = (model: Model) => VirtualNode<Action>

export type LevoUpdater<Model, Action> = (model: Model, action: Action, event: any) => Model

export const Levo = <Model, Action>() => {
  return {
    registerView: (view: LevoView<Model, Action>) => {
      //@ts-ignore
      if(typeof window !== undefined) { 
        // This is to prevent Deno from throwing error when some Worker tried to execute
        // this code, because `window` object does not exists in Worker scope
        try {
          //@ts-ignore
          window.$levoView = view
        }
        catch {}
      }
    },
    registerUpdater: (updater: LevoUpdater<Model, Action>) => {
      //@ts-ignore
      if(typeof window !== undefined) {
        try {
          //@ts-ignore
          window.$levoUpdater = updater
        }
        catch {}
      }
    }
  }
}