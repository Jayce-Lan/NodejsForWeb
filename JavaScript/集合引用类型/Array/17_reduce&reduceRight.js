let arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((acc, cur, idx, src) => acc + cur)); // 15
console.log(arr.reduce((acc, cur) => acc + cur)); // 15
console.log(arr.reduceRight((acc, cur, idx, src) => acc + cur)); // 15
