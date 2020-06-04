import { LevoElements } from "./levo-element.ts";

export type LevoView<Model, Action> = (model: Model) => LevoElements<Action>;
