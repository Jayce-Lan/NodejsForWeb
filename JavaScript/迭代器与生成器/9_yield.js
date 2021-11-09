/*
 * @Author: Jayce
 * @Date: 2021-11-09 16:03:02
 * @Description: 生成器作为默认迭代器
 *               提前终止生成器
 */

/**
 * 生成器作为默认迭代器
 * 因为生成器对象实现了 Iterable 接口，而且生成器函数和默认迭代器被调用之后都产生迭代器，
 * 所以生成器格外适合作为默认迭代器
 */
class Foo {
    constructor(arr) {
        this.values = arr
    }

    *[Symbol.iterator]() {
        yield *this.values;
    }
}

const f = new Foo([1, 2, 3, 4]);
for (const item of f) {
    console.log(item);
}

/**
 * 提前终止生成器
 * 与迭代器类似，生成器也支持“可关闭”的概念。一个实现 Iterator 接口的对象一定有 next()方法，
 * 还有一个可选的 return()方法用于提前终止迭代器
 * 生成器对象除了有这两个方法，还有第三个方法：throw()
 */
function *generatorFn1() {}
let g1 = generatorFn1();
console.log(g1); // Object [Generator] {}
console.log(g1.next); // [Function: next]
console.log(g1.return); // [Function: return]
console.log(g1.throw); // [Function: throw]

// return()和 throw()方法都可以用于强制生成器进入关闭状态

/**
 * return
 * 提供给 return()方法的值，就是终止迭代器对象的值
 */
function *generatorReturnFn1() {
    for (const item of [1, 2, 3]) {
        yield item;
    }
}

let gr1 = generatorReturnFn1();
console.log(gr1);
console.log(gr1.return(4)); // { value: 4, done: true }
console.log(gr1);

// 与迭代器不同，所有生成器对象都有 return()方法，只要通过它进入关闭状态，就无法恢复了。后续调用 next()会显示 done: true 状态，而提供的任何返回值都不会被存储或传播
let _gr1 = generatorReturnFn1();
console.log(_gr1.next()); // { value: 1, done: false }
console.log(_gr1.return(4)); // { value: 4, done: true }
console.log(_gr1.next()); // { value: undefined, done: true }
console.log(_gr1.next()); // { value: undefined, done: true }

// for-of 循环等内置语言结构会忽略状态为 done: true 的 IteratorObject 内部返回的值
_gr1 = generatorReturnFn1();
for (const item of _gr1) {
    if (item > 1) {
        _gr1.return(4);
    }
    console.log(item);
}

/**
 * throw()
 * throw()方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器就会关闭
 */
function *generatorThrow() {
    for (const item of [1, 2, 3]) {
        yield item;
    }
}

let gt1 = generatorThrow();
console.dir(gt1);
try {
    gt1.throw("错误");
} catch (error) {
    console.log(error);
}
console.dir(gt1);

// 不过，假如生成器函数内部处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行。错误处理会跳过对应的 yield，因此在这个例子中会跳过一个值
function *generatorThrowTryCatch() {
    for (const item of [1, 2, 3]) {
        try {
            yield item;
        } catch (error) {
            console.log(error);
        }
    }
}

let gttc = generatorThrowTryCatch();
console.log(gttc.next()); // { value: 1, done: false }
gttc.throw("错误"); // 错误
console.log(gttc.next()); // { value: 3, done: false }
