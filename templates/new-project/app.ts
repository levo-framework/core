import { LevoApp } from "levo/levo-app.ts";
import { compression, helmet } from "levo/levo-middlewares.ts";
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
  minifyCss: PRODUCTION,
  cachePages: PRODUCTION,
  rootDir: new URL("./root", import.meta.url),
  importMapPath: new URL("./import_map.json", import.meta.url),
  loggingOptions: PRODUCTION ? undefined : { model: true, action: true },
  processRequestMiddlewares: [
    (req) => console.log(new Date(), `${req.method} ${req.url}`),
  ],
  processResponseMiddlewares: [
    compression,
    helmet,
  ],
});
