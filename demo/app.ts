import { home } from './home/route.levo.ts';
import { levo } from '../src/levo-server.ts';

levo.start({
  port: 3000,
  routes: [
    home
  ]
})