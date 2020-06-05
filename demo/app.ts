import { LevoApp } from "../mod/levo-app.ts";

LevoApp.start({
  port: 3000,
  minifyJs: false,
  cachePages: false,
});
