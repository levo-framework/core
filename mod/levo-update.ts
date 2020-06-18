export type LevoUpdate<Model, Action> = (
  model: Model,
  action: Action,
  event: unknown,
) => {
  newModel: Model;
  then?: () => Promise<Action>;
};
