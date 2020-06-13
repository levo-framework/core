import Terser from "./terser.js";
import { babelstandalone } from "./deps.ts";

export const minify = (code: string): {
  code: string;
  error?: string;
} => {
  const babelled = (babelstandalone.default as any).transform(
    code,
    { presets: [["env"]] },
  );
  if (babelled.error) {
    return babelled.error;
  }
  return Terser.minify(babelled.code);
};
