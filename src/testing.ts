import { runtime } from './runtime.ts';
import jsdom from "https://dev.jspm.io/jsdom@16.2.2";
import babelstandalone from "https://dev.jspm.io/@babel/standalone@7.10.1"

const now = Date.now()
const JSDOM = jsdom.JSDOM;

const code = new TextDecoder('utf-8').decode(
  await Deno.run({
    cmd: ['deno', 'bundle', '--config', 'tsconfig.json', 'src/main.ts'],
    stdout: 'piped'
  })
  .output()
)

const transformed = babelstandalone.transform(code, {
  presets: [["env"]],
}).code

const dom = new JSDOM(`<body>
  <div id='root'></div>
  <script>
    ${runtime}
    ${transformed}
  </script>
</body>`, { runScripts: "dangerously" });

const document = dom.window.document;

console.log(document.getElementById('root').innerHTML);

console.log((Date.now() - now) / 1000)