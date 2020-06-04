import { exists, assertEquals } from "../../src/deps.ts";

Deno.chdir('./demo')
const worker = new Worker("./demo/app.ts", { 
  type: "module", 
  //@ts-ignore
  deno: true 
});

// Wait for server to startup
await new Promise(resolve => setTimeout(resolve, 3000))

Deno.test({
  name: 'serve webpage based on directory that has levo.client.ts (top-level)', 
  fn: async () => {
    const result = await fetch('http://localhost:3000/home')
    assertEquals(result.headers.get('content-type'), 'text/html')
    assertEquals(result.status, 200)
  },
  sanitizeResources: false,
  sanitizeOps: false,
})

Deno.test({
  name: 'serve webpage based on directory that has levo.client.ts (nested directory)', 
  fn: async () => {
    const result = await fetch('http://localhost:3000/home/about')
    assertEquals(result.headers.get('content-type'), 'text/html')
    assertEquals(result.status, 200)
  },
  sanitizeResources: false,
  sanitizeOps: false,
})

Deno.test({
  name: 'handle URL with trailing slash', 
  fn: async () => {
    const result = await fetch('http://localhost:3000/home')
    assertEquals(result.headers.get('content-type'), 'text/html')
    assertEquals(result.status, 200)
  },
  sanitizeResources: false,
  sanitizeOps: false,
})

Deno.test({
  name: 'handle URL with query params', 
  fn: async () => {
    const result = await fetch('http://localhost:3000/home?title=123')
    assertEquals(result.headers.get('content-type'), 'text/html')
    assertEquals(result.status, 200)
  },
  sanitizeResources: false,
  sanitizeOps: false,
})

Deno.test({
  name: 'serve asset under levo.assets', 
  fn: async () => {
    const result = await fetch('http://localhost:3000/home/levo.assets/index.css')
    assertEquals(result.headers.get('content-type'), 'text/css')
    assertEquals(result.status, 200)
  },
  sanitizeResources: false,
  sanitizeOps: false,
})


Deno.test({
  name: 'serve compressed body whenever possible (br)', 
  fn: async () => {
    const headers = new Headers()
    headers.set('Accept-Encoding', 'br, gzip')
    const result = await fetch('http://localhost:3000/home/levo.assets/index.css', {
      headers
    })
    assertEquals(result.headers.get('content-type'), 'text/css')
    assertEquals(result.headers.get('levo-content-encoding'), 'br')
    assertEquals(result.status, 200)
  },
  sanitizeResources: false,
  sanitizeOps: false,
})

Deno.test({
  name: 'serve compressed body whenever possible (gzip)', 
  fn: async () => {
    const headers = new Headers()
    headers.set('Accept-Encoding', 'gzip')
    const result = await fetch('http://localhost:3000/home/levo.assets/index.css', {
      headers
    })
    assertEquals(result.headers.get('content-type'), 'text/css')
    assertEquals(result.headers.get('levo-content-encoding'), 'gzip')
    assertEquals(result.status, 200)
  },
  sanitizeResources: false,
  sanitizeOps: false,
})

Deno.test({
  name: 'return 404 when querying directory without levo.client.ts', 
  fn: async () => {
    const headers = new Headers()
    headers.set('Accept-Encoding', 'gzip')
    const result = await fetch('http://localhost:3000/dummy', {
      headers
    })
    assertEquals(result.status, 404)
  },
  sanitizeResources: false,
  sanitizeOps: false,
})