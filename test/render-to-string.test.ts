import { renderToString } from './../src/render-to-string.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { elementCreators } from './../src/element-creators.ts';

Deno.test('render-to-string', () => {
  const el = elementCreators<{type: 'click', index: number}>()
  const virtualNode = el.div({
    style: {
      'display': 'grid',
      'align-items': 'center'
    }
  }, [
    el.input({value: 'hello'}),
    el.button({
      events: {
        click:  {type: 'click', index: 2}
      }
    }, [
      el.text('click me')
    ])
  ])

  assertEquals(renderToString(virtualNode), `
  <div style='display:grid;align-items:center'><input value='hello'></input><button onclick='$$h({type:\"click\",index:2})'>click me</button></div>
  `.trim())
})