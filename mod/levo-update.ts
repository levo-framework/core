export type LevoUpdate<Model, Action> = (
  model: Model,
  action: Action,
  event: any,
) => {
  newModel: Model;
  then?: () => Promise<Action>;
};
