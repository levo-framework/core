#!/bin/sh
deno types > './lib/lib.deno_runtime.d.ts'
deno types > './templates/new-project/lib/lib.deno_runtime.d.ts'