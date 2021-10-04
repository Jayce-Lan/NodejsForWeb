const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);

console.log(map.entries === map[Symbol.iterator]);  // true

for (let m of map.entries()) {
    console.log(m);
}

for (let m of map[Symbol.iterator]()) {
    console.log(m);
}

// 直接扩展为数组
let mapArr = [...map];
console.log(mapArr); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]

// 使用 forEach
map.forEach((item, key) => console.log(`${key} => ${item}`));

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}