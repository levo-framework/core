import { serve } from "levo/levo-serve.ts";

export default serve({
  getResponse: async (request, response) => {
    return response.custom({
      body: `
User-agent: *
Allow: /
      `.trim(),
    });
  },
});
