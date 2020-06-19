import { LevoApp } from "https://deno.land/x/levo/mod/levo-app.ts";

const production = Deno.args.includes("--production");
LevoApp.start({
  port: 5000,
  minifyJs: production,
  cachePages: production,
  rootDir: new URL("./root", import.meta.url),
});

// /".*?mod\/.*?"/.exec(`import { LevoApp } from "https://deno.land/x/levo/mod/levo-app.ts"`)[0]
// `import { LevoApp } from "https://deno.land/x/levo/mod/levo-app.ts"`.replace(/".*?mod\/.*?"/, `"../mod/x"`)

// `import { LevoApp } from "https://deno.land/x/levo/mod/levo-app.ts"`.replace(/".*?mod\//, `"../mod/x/`)
