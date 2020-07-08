#!/bin/sh
git status | grep "levo-runtime-raw.ts" \
  && echo "levo-runtime-raw.ts is not up to date" 1>&2 \
  && exit 1
exit 0