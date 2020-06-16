import { Action } from "./action.ts";
import { Model } from "./model.ts";
import { LevoUpdate } from "../../../mod/levo-update.ts";

export const update: LevoUpdate<Model, Action> = (model, action, event) => {
  switch (action.$) {
    case "say hello":
      alert("hello");
      break;

    case "show":
      alert(`show ${action.color}`);
      break;
  }
  if (action.$ === "say hello") {
    alert("hello");
  }
  return { newModel: model };
};
