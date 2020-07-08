declare const $$h: <Action>(action: Action) => void;
export const setEventHandler = <Action>({
  element,
  eventName,
  action,
}: {
  element: HTMLElement;
  eventName: string;
  action: Action;
}): void => {
  if (action !== undefined) {
    (element as any)[eventName] = () => $$h(action);
  }
};
