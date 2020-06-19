export type Model = {
  rotation: number;
  color: string;
};

export type Action =
  | {
    $: "rotate";
  }
  | {
    $: "change_color";
    color: string;
  };
