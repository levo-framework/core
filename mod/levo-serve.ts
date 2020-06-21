import { renderToString } from "../src/render-to-string.ts";
import { CustomResponse, LevoServeResponse } from "./levo-serve-response.ts";
import { Levo, createDispatch } from "./levo-view.ts";

export type LevoRequest = {
  url: string;
  body: any;
  method: string;
  headers: Headers;
  search: string;
};

export type Responder<Model, Action> = {
  page: (
    {}: {
      model: Model;
      view: (
        props: { model: Model; dispatch: Levo.Dispatch<Action> },
      ) => Levo.Element;
    },
  ) => LevoServeResponse<Model>;
  redirect: ({}: { url: string }) => LevoServeResponse<Model>;
  custom: (response: CustomResponse) => LevoServeResponse<Model>;
};

export const serve = <Model = {}, Action = {}>({
  getResponse,
}: {
  getResponse: (
    req: LevoRequest,
    respond: Responder<Model, Action>,
  ) => Promise<LevoServeResponse<Model>>;
}) => {
  self.onmessage = async (event: { data: LevoRequest }) => {
    try {
      const response = await getResponse(event.data, {
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
      self.postMessage(response);
    } catch (error) {
      console.error("ERROR(levo-serve): ", error);
      self.postMessage({ error }); // TODO: handle gracefully
    }
    self.close();
  };
};
