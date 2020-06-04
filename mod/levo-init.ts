export type LevoInit<Model, Action> = (
  model: Model,
  dispatch: (action: Action) => void,
) => void;
