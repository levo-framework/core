import { LevoApp } from "../../mod/levo-app.ts";
import { compression, helmet } from "../../mod/levo-middlewares.ts";
import { Environment } from "./environment.ts";

const PRODUCTION = Deno.args.includes("--production");
LevoApp.start<Environment>({
  serverOptions: {
    hostname: "0.0.0.0",
    port: 5000,
  },
  environment: PRODUCTION
    ? {
      VALUE_A: "xxx",
      VALUE_B: "yyy",
    }
    : {
      VALUE_A: "aaa",
      VALUE_B: "bbb",
    },
  minifyJs: PRODUCTION,
  cachePages: PRODUCTION,
  rootDir: new URL("./root", import.meta.url),
  loggingOptions: PRODUCTION ? undefined : { model: true, action: true },
  processResponseMiddlewares: [
    compression,
    helmet,
  ],
});
