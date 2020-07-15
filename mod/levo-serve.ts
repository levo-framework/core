import { renderToString } from "../src/render-to-string.ts";
import { CustomResponse, LevoServeResponse } from "./levo-serve-response.ts";
import { Levo, createDispatch } from "./levo-view.ts";

export type LevoServe<Model, Environment> = (
  request: LevoServeRequest<Environment>,
) => Promise<LevoServeResponse<Model>>;

export type LevoServeRequest<Environment> = {
  url: string;
  body: Uint8Array;
  contentLength: number | null;
  method: string;
  proto: string;
  protoMajor: number;
  protoMinor: number;
  headers: Headers;
  search: string;
  environment: Environment;
};

export type Responder<Model, Action extends { $: string }> = {
  page: (
    args: {
      model: Model;
      view: (
        props: { model: Model; dispatch: Levo.Dispatch<Action> },
      ) => Levo.Element;
    },
  ) => LevoServeResponse<Model>;
  redirect: (args: { url: string }) => LevoServeResponse<Model>;
  custom: (response: CustomResponse) => LevoServeResponse<Model>;
};

export const serve = <Model, Action extends { $: string }, Environment>({
  getResponse,
}: {
  getResponse: (
    request: LevoServeRequest<Environment>,
    respond: Responder<Model, Action>,
  ) => Promise<LevoServeResponse<Model>>;
}): LevoServe<Model, Environment> => {
  return async (request) => {
    const response = await getResponse(request, {
      page: ({ model, view }) => {
        const html = renderToString(
          (view({ model, dispatch: createDispatch() })),
        );
        return { $: "page", model, html };
      },
      redirect: ({ url }) => ({ $: "redirect", url }),
      custom: (response) => {
        return { $: "custom", response };
      },
    });
    return response;
  };
};
