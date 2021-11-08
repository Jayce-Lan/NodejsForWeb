/*
 * @Author: Jayce
 * @Date: 2021-11-08 09:42:23
 * @LastEditTime: 2021-11-08 10:10:52
 * @Description: WeakSet基本API
 */

// 使用 new 关键字实例化一个新的 WeakSet
const ws1 = new WeakSet();

const obj1 = {id: 1},
      obj2 = {id: 2},
      obj3 = {id: 3};

// 使用数组初始化弱集合
const ws2 = new WeakSet([obj1, obj2, obj3]);
console.log(ws2.has(obj1)); // true
console.log(ws2.has(obj2)); // true
console.log(ws2.has(obj3)); // true

// 初始化是一个全全有或全无的操作，只要有一个异常就会导致整个初始化失败
// const ws3 = new WeakSet([obj1, "TEST", obj2]); // TypeError: Invalid value used in weak set

// 原始值可以先包装为对象再作用该值
const stringValue = new String("TEST");
const ws3 = new WeakSet([obj1, stringValue, obj3]);
console.log(ws3.has("TEST")); // false
console.log(ws3.has(stringValue)); // true

// 初始化之后使用 add() 再添加新值，可以使用 has() 查询，可以使用 delete() 删除
const ws4 = new WeakSet();
ws4.add(obj1)
    .add(obj2);

console.log(ws4.has(obj1)); // true
console.log(ws4.has(obj2)); // true

ws4.delete(obj1);
console.log(ws4.has(obj1)); // false
