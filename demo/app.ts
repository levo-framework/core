import { LevoApp } from "../mod/levo-app.ts";

LevoApp.start({
  port: 3000,
  hostname: "0.0.0.0",
  minifyJs: false,
  cachePages: false,
  rootDir: ["home"],
});
