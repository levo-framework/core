import { serve } from "../../../../mod/levo-serve.ts";

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
