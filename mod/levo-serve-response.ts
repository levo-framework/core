export type LevoServeResponse<Model> = {
  $: "page";
  model: Model;
  html: string;
} | {
  $: "redirect";
  url: string;
} | {
  $: "custom";
  response: CustomResponse;
};

export type CustomResponse = {
  status?: number;
  headers?: Record<string, string>;
  body?: string;
};
