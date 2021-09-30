const buf = new ArrayBuffer(16);

const fullDataView = new DataView(buf);
console.log(fullDataView.byteOffset); // 0
console.log(fullDataView.byteLength); // 16
console.log(fullDataView.buffer === buf);   // true
