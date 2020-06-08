import { LevoApp } from "https://deno.land/x/levo/mod/levo-app.ts";

const production = Deno.args.includes("--production");
LevoApp.start({
  port: 5000,
  minifyJs: production,
  cachePages: production,
  rootDir: ["root"],
});