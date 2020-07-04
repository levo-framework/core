# Exit whenever a command exit with non-zero status
# Refer https://stackoverflow.com/a/821419/6587634
set -e 

deno fmt $1 demo
deno fmt $1 mod
deno fmt $1 src
deno fmt $1 test
deno fmt $1 templates
deno fmt $1 cli
deno fmt $1 tools
deno fmt $1 ./test-levo-runtime/test.js