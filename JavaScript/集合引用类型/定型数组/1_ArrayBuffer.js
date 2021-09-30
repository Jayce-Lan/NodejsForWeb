const buf = new ArrayBuffer(16); // 在内存分配16字节
console.log(buf);
/*
ArrayBuffer {
  [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>,
  byteLength: 16
}
 */
console.log(typeof buf); // object
console.log(buf instanceof Array); // false
console.log(buf.byteLength); // 16

buf.byteLength = 15;
console.log(buf.byteLength); // 16 一旦创建，无法改动
const buf2 = buf.slice(2, 10);
console.log(buf2.byteLength); // 8