import { LevoApp } from "../../mod/levo-app.ts";

const production = Deno.args.includes("--production");
LevoApp.start({
  hostname: "0.0.0.0",
  port: 5000,
  minifyJs: production,
  cachePages: production,
  rootDir: new URL("./root", import.meta.url),
  loggingOptions: production ? undefined : { model: true, action: true },
});
