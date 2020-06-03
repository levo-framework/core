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
      `$$h('${btoa(JSON.stringify(action))}')`,
    );
  }
};
