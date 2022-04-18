
mkdir ./build || rm ./build/*.* || true

docker run -v "$(pwd):/var/task" wasm-builder \
  clang --target=wasm32 --no-standard-libraries -Wl,--export-all -Wl,--no-entry -o build/add.wasm src/add.c
