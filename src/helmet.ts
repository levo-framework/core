import { ProcessResponseMiddleware } from "./middleware.ts";

/**
 * Based on https://helmetjs.github.io/
 */
export const helmet: ProcessResponseMiddleware = async (request, response) => {
  return {
    ...response,
    headers: {
      ...response.headers,
      "X-DNS-Prefetch-Control": "off",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Download-Options": "noopen",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
    },
  };
};
