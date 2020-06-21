import { LevoApp } from "../mod/levo-app.ts";

LevoApp.start({
  port: 3000,
  hostname: "0.0.0.0",
  minifyJs: true,
  cachePages: false,
  rootDir: new URL("./home", import.meta.url),
});
