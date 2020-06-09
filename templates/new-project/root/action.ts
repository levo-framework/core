export type Action =
  | {
    $: "rotate";
  }
  | {
    $: "change_color";
    color: string;
  };
