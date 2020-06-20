import { brotliCompress } from "./src/deps.ts"

brotliCompress(new TextEncoder().encode('his'))

console.log('helo')