import { LevoApp } from "../mod/levo-app.ts";
import { Environment } from "./environment.ts";

const production = Deno.args.includes("--production");

LevoApp.start<Environment>({
  serverOptions: {
    port: 3000,
    hostname: "0.0.0.0",
  },
  environment: {
    AUTH_SERVER_URL: production
      ? "https://prod.auth.com"
      : "http://dev.auth.com",
  },
  minifyJs: production,
  cachePages: production,
  rootDir: new URL("./home", import.meta.url),
  loggingOptions: production ? undefined : {
    action: true,
    patches: true,
    model: true,
  },
});
