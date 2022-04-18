# node-wasm-adder

An example of how to get C code running under nodejs wasm.

## Contents

Install the following:

- `Dockerfile` container definition with tools for compiling C -> WASM
- `build-docker.sh`: Script to build a container for compiling C -> WASM
- `build-wasm.sh`: Scripto to compile C -> WASM
- `index.js`: Sample file for executing output file `/build/test.wasm` within Node.js.

