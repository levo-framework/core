import { levo } from '../src/levo-server.ts';

levo.start({
  port: 3000,
  minifyJs: true,
  cachePages: true 
})