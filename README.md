# node-wasm-adder

An example of how to get C code running under nodejs wasm.

## Contents

- [`src/add.c`](src/add.c): A simple C file containing function `add()`
- [`Dockerfile`](Dockerfile): Container definition with tools for compiling C -> WASM
- [`build-docker.sh`](build-docker.sh): Script to build a container for compiling C -> WASM
- [`build-wasm.sh`](build-wasm.sh): Script to compile C -> WASM
- [`index.js`](index.js): Sample file for executing output file `/build/adder.wasm` within Node.js.

## Motivation

This shows how easy it is to farm off resource-intensive tasks to C/WASM that are poorly kept within JS execution context.
