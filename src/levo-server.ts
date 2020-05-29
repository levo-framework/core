import { levoRuntimeCode } from './../levo-runtime-raw.ts';
import { server } from './deps.ts'
import { path } from './deps.ts'
import { renderToString } from './render-to-string.ts';
import { LevoView } from './levo.ts';

export type LevoRoute<Model, Action> = {
  /**
   * Shouldn't end with `/`
    */
  path: string
  handle: (request: server.ServerRequest) => Promise<{
    model: Model,
    view: LevoView<Model, Action>
  }>
}

export const levo = {
  start: async (options: server.HTTPOptions & {
    routes: LevoRoute<any, any>[]
  }) => {
    const s = server.serve(options);
    const bundle = async (filename: string) =>
      new TextDecoder('utf-8').decode(
        await Deno.run({
          cmd: ['deno', 'bundle', filename],
          stdout: 'piped'
        })
          .output()
      )

    console.log(`Server listening on ${options.hostname ?? '0.0.0.0'}:${options.port}`)
    for await (const req of s) {
      console.log(new Date(), `Incoming request: ${req.url}`)
      const matchingRoute = options.routes.find(route => req.url.startsWith(route.path))
      if(!matchingRoute) {
        req.respond({status: 500})
        continue
      }
      const headers = new Headers()
      const dirname = Deno.cwd() + path.SEP + matchingRoute.path + path.SEP
      const viewCode = await bundle(dirname + 'view.levo.ts')
      const updaterCode = await bundle(dirname + 'updater.levo.ts')

      headers.set('content-type', 'text/html')

      const {view, model}  = await matchingRoute.handle(req)

      const html = renderToString(view(model))
      req.respond({
        headers,
        body: `
          ${html}
          <script>
            (()=>{${viewCode.replace(/export const/gi, 'const')}})();
            (()=>{${updaterCode.replace(/export const/gi, 'const')}})();
            (()=>{window.$levoModel=${JSON.stringify(model)}})();
            (()=>{${levoRuntimeCode}})();
          </script>
        `.trim(),
      });
    }

  }
}  
