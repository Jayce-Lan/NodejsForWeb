/*
 * @Author: Jayce
 * @Date: 2021-11-08 16:33:26
 * @LastEditTime: 2021-11-08 17:19:27
 * @Description: 迭代器协议
 */
// 可迭代对象
let arr = ["foo", "bar", "baz"];
// 迭代器
let iter = arr[Symbol.iterator]();
console.log(iter); // Object [Array Iterator] {}
// 执行迭代
console.log(iter.next()); // { value: 'foo', done: false }
console.log(iter.next()); // { value: 'bar', done: false }
console.log(iter.next()); // { value: 'baz', done: false }
console.log(iter.next()); // { value: undefined, done: true }
console.log(iter.next()); // { value: undefined, done: true }

let iter1 = arr[Symbol.iterator]();
let iter2 = arr[Symbol.iterator]();
console.log(iter1.next()); // { value: 'foo', done: false }
console.log(iter1.next()); // { value: 'bar', done: false }
console.log(iter2.next()); // { value: 'foo', done: false }
console.log(iter2.next()); // { value: 'bar', done: false }

// 迭代中插入元素
let iterSplice = arr[Symbol.iterator]();
console.log(iterSplice.next()); // { value: 'foo', done: false }
arr.splice(1, 0, "testSplice");
console.log(iterSplice.next()); // { value: 'testSplice', done: false }
console.log(iterSplice.next()); // { value: 'bar', done: false }
console.log(iterSplice.next()); // { value: 'baz', done: false }

/**
 * 实现可迭代接口（Iterable）
 * 调用默认迭代器工厂函数会返回
 * 一个实现迭代接口的迭代器对象
 */
class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return {
                    done: false,
                    value: "foo"
                }
            }
        }
    }
}

let f = new Foo();
console.log(f[Symbol.iterator]()); // next: [Function: next]

// Array 类型实现了可迭代接口（Iterable）
let a = new Array();
console.log(a[Symbol.iterator]()); // Object [Array Iterator] {}
