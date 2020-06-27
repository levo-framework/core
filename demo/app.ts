import { LevoApp } from "../mod/levo-app.ts";

const production = Deno.args.includes("--production");
LevoApp.start({
  port: 3000,
  hostname: "0.0.0.0",
  minifyJs: production,
  cachePages: production,
  rootDir: new URL("./home", import.meta.url),
  loggingOptions: production ? undefined : {
    action: true,
    patches: true,
    model: true,
  },
});
