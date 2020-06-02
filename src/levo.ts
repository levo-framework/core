import { VirtualNode } from "./virtual-node.ts";

export type LevoView<Model, Action> = (model: Model) => VirtualNode<Action>;

export type LevoUpdate<Model, Action> = (
  model: Model,
  action: Action,
  event: any,
) => {
  newModel: Model;
  then?: () => Promise<Action>;
};

export type LevoInit<Model, Action> = (
  model: Model,
  dispatch: (action: Action) => void,
) => void;

export const Levo = <Model, Action>() => {
  return {
    registerView: (view: LevoView<Model, Action>) => {
      //@ts-ignore
      if (typeof window !== undefined) {
        // This is to prevent Deno from throwing error when some Worker tried to execute
        // this code, because `window` object does not exists in Worker scope
        try {
          //@ts-ignore
          window.$levoView = view;
        } catch {}
      }
    },
    registerUpdate: (updater: LevoUpdate<Model, Action>) => {
      //@ts-ignore
      if (typeof window !== undefined) {
        try {
          //@ts-ignore
          window.$levoUpdater = updater;
        } catch {}
      }
    },
    registerInit: (init: LevoInit<Model, Action>) => {
      //@ts-ignore
      if (typeof window !== undefined) {
        try {
          //@ts-ignore
          window.$levoInit = init;
        } catch {}
      }
    },
  };
};
