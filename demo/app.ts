import { LevoApp } from "../mod/levo-app.ts";
import { Environment } from "./environment.ts";
import { compression, helmet } from "../mod/levo-middlewares.ts";

const production = Deno.args.includes("--production");

LevoApp.start<Environment>({
  serverOptions: {
    port: 3000,
    hostname: "0.0.0.0",
  },
  environment: {
    VALUE_A: production ? "PROD_ENV" : "DEV_ENV",
  },
  minifyCss: production,
  cacheDirectoryTree: production,
  hotReload: !production,
  rootDir: new URL("./home", import.meta.url),
  whenPageNotFound: {
    type: "redirect",
    url: "/404",
  },
  loggingOptions: production ? undefined : {
    action: true,
    patches: true,
    model: true,
  },
  processRequestMiddlewares: [
    (req) => console.log(new Date(), `${req.method} ${req.url}`),
  ],
  processResponseMiddlewares: [
    compression,
    helmet,
  ],
});
