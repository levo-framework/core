import { renderToString } from "../src/render-to-string.ts";
import { VirtualNode } from "../src/virtual-node.ts";
export type LevoRequest = {
  url: string;
  body: any;
  method: string;
  headers: Headers;
  search: string;
};

export const serve = <Model, Action>({
  getModel,
  view,
}: {
  getModel: (req: LevoRequest) => Promise<Model>;
  view: (model: Model) => VirtualNode<Action>;
}) => {
  self.onmessage = async (event: { data: LevoRequest }) => {
    try {
      const model = await getModel(event.data);
      const html = renderToString(view(model));
      self.postMessage({ model, html });
    } catch (error) {
      self.postMessage({ error }); // TODO: handle gracefully
    }
    self.close();
  };
};
