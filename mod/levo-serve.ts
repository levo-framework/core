import { renderToString } from "../src/render-to-string.ts";
import { VirtualNode } from "../src/virtual-node.ts";
export type LevoRequest = {
  url: string;
  body: any;
  method: string;
  headers: Headers;
  search: string;
};

export type Response<Model, Action> = {
  $: "page";
  model: Model;
  html: string;
} | {
  $: "redirect";
  url: string;
} | {
  $: "custom";
};

export type Responder<Model, Action> = {
  page: (
    {}: { model: Model; view: (model: Model) => VirtualNode<Action> },
  ) => Response<Model, Action>;
  redirect: ({}: { url: string }) => Response<Model, Action>;
  custom: () => Response<Model, Action>;
};

export const serve = <Model, Action>({
  getResponse,
}: {
  getResponse: (
    req: LevoRequest,
    respond: Responder<Model, Action>,
  ) => Promise<Response<Model, Action>>;
}) => {
  self.onmessage = async (event: { data: LevoRequest }) => {
    try {
      const response = await getResponse(event.data, {
        page: ({ model, view }) => {
          const html = renderToString(view(model));
          return { $: "page", model, html };
        },
        redirect: ({ url }) => ({ $: "redirect", url }),
        custom: () => {
          throw new Error(`not implemented yet`);
        },
      });
      self.postMessage(response);
    } catch (error) {
      self.postMessage({ error }); // TODO: handle gracefully
    }
    self.close();
  };
};
