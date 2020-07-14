import Terser from "./terser.js";
import Babel from "./babelstandalone.js";

export const minify = (code: string): {
  code: string;
  error?: string;
} => {
  const babelled = Babel.transform(
    code,
    { presets: [["env"]] },
  );
  if (babelled.error) {
    return babelled.error;
  }
  return Terser.minify(babelled.code);
};
