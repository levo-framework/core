import { LevoUpdate } from "./levo-update.ts";
import { LevoInit } from "./levo-init.ts";
import { Levo } from "./levo-view.ts";

export const client = <Model, Action extends {$: string}>() => {
  return {
    registerUpdate: (
      updater: LevoUpdate<Model, Action>,
    ) => {
      //@ts-ignore
      if (typeof window !== undefined) {
        try {
          //@ts-ignore
          window.$levoUpdater = updater;
        } catch {}
      }
    },
    registerView: (view: (model: Model, $: Levo.Dispatch<Action>) => Levo.Element) => {
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
