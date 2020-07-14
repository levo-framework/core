export {
  assert,
  assertEquals,
} from "https://deno.land/std@0.61.0/testing/asserts.ts";

export {
  exists,
  existsSync,
  copy,
} from "https://deno.land/std@0.61.0/fs/mod.ts";

export * as server from "https://deno.land/std@0.59.0/http/mod.ts";

export * as path from "https://deno.land/std@0.61.0/path/mod.ts";

import _CleanCSS from "./clean-css.js";
const CleanCSS: {
  new (): {
    minify(input: string): {
      styles: string;
      warnings: string[];
      errors: string[];
    };
  };
} = _CleanCSS as any;
export { CleanCSS };
