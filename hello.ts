import { brotliCompress } from "./src/deps.ts"

Deno.test('hello', () => {
  brotliCompress(new TextEncoder().encode('his'))
  
  console.log('helo')
})
