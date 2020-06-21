import { LevoApp } from "../../mod/levo-app.ts";

const production = Deno.args.includes("--production");
LevoApp.start({
  port: 5000,
  minifyJs: production,
  cachePages: production,
  rootDir: new URL("./root", import.meta.url),
});
