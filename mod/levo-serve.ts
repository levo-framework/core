import { renderToString } from "../src/render-to-string.ts";
import { CustomResponse, LevoServeResponse } from "./levo-serve-response.ts";
import { Levo, createDispatch } from "./levo-view.ts";

export type LevoRequest<Environment> = {
  url: string;
  body: any;
  method: string;
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
    request: LevoRequest<Environment>,
    respond: Responder<Model, Action>,
  ) => Promise<LevoServeResponse<Model>>;
}): (
  request: LevoRequest<Environment>,
) => Promise<LevoServeResponse<Model>> => {
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
