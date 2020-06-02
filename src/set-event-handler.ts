export const setEventHandler = <Action>({
  element,
  eventName,
  action,
}: {
  element: HTMLElement;
  eventName: string;
  action: Action;
}) => {
  if (action !== undefined) {
    element.setAttribute(
      eventName,
      `$$h(${JSON.stringify(action).replace(/"([^"]+)":/g, "$1:")})`,
    );
  }
};
