# node-wasm-adder

An example of how to get C code running under nodejs wasm.

## Contents

Install the following:

- `src/adder.c`: A simple C file containing function `add()`
- `Dockerfile`: Container definition with tools for compiling C -> WASM
- `build-docker.sh`: Script to build a container for compiling C -> WASM
- `build-wasm.sh`: Scripto to compile C -> WASM
- `index.js`: Sample file for executing output file `/build/adder.wasm` within Node.js.

