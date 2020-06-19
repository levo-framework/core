export type Model = {
  rotation: number;
  color: string;
};

export const initialModel = (): Model => {
  return {
    rotation: 0,
    color: "",
  };
};

export type Action =
  | {
    $: "rotate";
  }
  | {
    $: "change_color";
    color: string;
  };