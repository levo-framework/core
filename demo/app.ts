import { LevoApp } from "../mod/levo-app.ts";
import { Environment } from "./environment.ts";

const production = Deno.args.includes("--production");

LevoApp.start<Environment>({
  serverOptions: {
    port: 3000,
    hostname: "0.0.0.0",
  },
  environment: {
    VALUE_A: production ? "PROD_ENV" : "DEV_ENV",
  },
  minifyJs: production,
  cachePages: production,
  rootDir: new URL("./home", import.meta.url),
  loggingOptions: production ? undefined : {
    action: true,
    patches: true,
    model: true,
  },
  importMapPath: new URL("./import_map.json", import.meta.url),
});
