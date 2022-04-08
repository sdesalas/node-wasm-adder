const util = require('util');
const fs = require('fs');
const source = fs.readFileSync('./build/test.wasm');
const env = {
  memoryBase: 0,
  tableBase: 0,
  memory: new WebAssembly.Memory({
    initial: 256
  }),
  table: new WebAssembly.Table({
    initial: 0,
    element: 'anyfunc'
  })
};

(async() => {
  try {
    const wasm = await WebAssembly.instantiate(new Uint8Array(source), {env})
    console.log(util.inspect(wasm, true, 0));
    console.log(wasm.instance.exports);
    console.log(wasm.instance.exports.add(9,9));
  } catch (err) {
    console.error(err);
  }
})();
