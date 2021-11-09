/*
 * @Author: Jayce
 * @Date: 2021-11-08 11:57:18
 * @LastEditTime: 2021-11-08 16:32:43
 * @Description: 可迭代协议
 */
let arr = ["foo", "bar", "baz"];

// for-of 循环
for (let el of arr) {
    console.log(el);
}

// 数组解构
let [a, b, c] = arr;
let [d, e] = arr;
let [f, ...g] = arr;
console.log(a, b, c); // foo bar baz
console.log(d, e); // foo bar
console.log(f, g); // foo [ 'bar', 'baz' ]

// 扩展操作符
let arr2 = [...arr];
console.log(arr2); // [ 'foo', 'bar', 'baz' ]

// Array.from()
let arr3 = Array.from(arr);
console.log(arr3); // [ 'foo', 'bar', 'baz' ]

// Set 构造函数
let set = new Set(arr);
console.log(set); // Set(3) { 'foo', 'bar', 'baz' }

// Map 构造函数
let pairs = arr.map((item, index) => [item, index]);
console.log(pairs); // [ [ 'foo', 0 ], [ 'bar', 1 ], [ 'baz', 2 ] ]
let map = new Map(pairs);
console.log(map); // Map(3) { 'foo' => 0, 'bar' => 1, 'baz' => 2 }

// 如果对象原型链上的父类实现了 Iterable 接口，那这个对象也就实现了这个接口
class FooArray extends Array {}
let fooArray = new FooArray("foo", "bar", "baz");
for (let item of fooArray) {
    console.log(item);
}
