import { computeAttributesUpdates } from './../src/compute-attributes-updates.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

Deno.test('compute attributes updates', () => {
  assertEquals(computeAttributesUpdates({
    originalAttrs: {
      x: 1,
      z: 4,
      a: 0
    },
    updatedAttrs: {
      a: 0,
      x: 2,
      y: 3,
    },
  }), [
    { type: "update_attribute", attributeName: "x", value: 2 },
    { type: "remove_attribute", attributeName: "z" },
    { type: "update_attribute", attributeName: "y", value: 3 }
  ])

  assertEquals(computeAttributesUpdates({
    originalAttrs: {
    },
    updatedAttrs: {
      x: undefined
    }
  }), [])
})