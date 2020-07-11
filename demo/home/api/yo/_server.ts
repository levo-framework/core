import { serve } from "./../../../../mod/levo-serve.ts";

export default serve({
  getResponse: async (request, respond) => {
    return respond.custom({
      status: 201,
      headers: {
        "custom-lol": "ha",
      },
      body: JSON.stringify({ search: request.search }),
    });
  },
});
