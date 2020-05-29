export const setEventHandler = <Action>(
  element: HTMLElement,
  eventName: string,
  action: Action
) => {
  if(action !== undefined) {
    element.setAttribute(
      "on" + eventName,
      `$$h(${JSON.stringify(action).replace(/"([^"]+)":/g, '$1:')})`
    );
  }
}