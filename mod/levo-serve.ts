import { renderToString } from "../src/render-to-string.ts";
import { VirtualNode } from "../src/virtual-node.ts";
export type LevoRequest = {
  url: string;
  body: any;
  method: string;
  headers: Headers;
  search: string;
};

type Response<Model> = ['model', Model] | ['redirect', {url: string}]

export const serve = <Model, Action>({
  getModel,
  view,
}: {
  getModel: (req: LevoRequest) => Promise<Response<Model>>;
  view: (model: Model) => VirtualNode<Action>;
}) => {
  self.onmessage = async (event: { data: LevoRequest }) => {
    try {
      const response = await getModel(event.data);
      switch(response[0]) {
        case 'model': {
          const html = renderToString(view(model));
          self.postMessage({ $: 'model', model: response[1], html });
          break;
        }
        case 'redirect': {
          self.postMessage({ $: 'redirect', url: response[1]?.url });
          break;
        }
      }

    } catch (error) {
      self.postMessage({ error }); // TODO: handle gracefully
    }
    self.close();
  };
};
