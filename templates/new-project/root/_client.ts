/// <reference lib="dom"/>

import { Levo } from "levo/levo-view.ts";
import { Model, Action } from "./view.tsx";
import { view } from "./view.tsx";

export const init: Levo.Init<Model, Action> = () => {
};

export const update: Levo.Update<Model, Action> = (
  { model, action },
) => {
  switch (action.$) {
    case "do nothing": {
      return {
        newModel: {
          ...model,
        },
      };
    }
  }
};

Levo.register<Model, Action>({ init, view, update });
