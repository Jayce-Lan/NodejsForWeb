/*
 * @Author: Jayce
 * @Date: 2021-11-08 21:53:59
 * @Description: 通过 yield 中断执行
 * yield 关键字可以让生成器停止和开始执行，也是生成器最有用的地方。生成器函数在遇到 yield
 * 关键字之前会正常执行。遇到这个关键字后，执行会停止，函数作用域的状态会被保留。停止执行的生
 * 成器函数只能通过在生成器对象上调用 next()方法来恢复执行
 */

function *generatorFn1() {
    yield "foo";
    yield "bar";
    return "baz";
}

let generatorObj1 = generatorFn1();

console.log(generatorObj1.next()); // { value: 'foo', done: false }
console.log(generatorObj1.next()); // { value: 'bar', done: false }
console.log(generatorObj1.next()); // { value: 'baz', done: true }
console.log(generatorObj1.next()); // { value: undefined, done: true }

/* 
 * 生成器对象作为可迭代对象
 */
function *generatorFn2() {
    yield 1;
    yield 2;
    yield 3;
}

for (const item of generatorFn2()) {
    console.log(item);
}

function *generatorFn3(count) {
    while(count--) {
        yield count + 1;
    }
}

for (const item of generatorFn3(3)) {
    console.log(item); 
}

/* 
 * 使用 yield 实现输入和输出
 */
function *generatorFn4(params) {
    console.log(params);
    console.log(yield);
    console.log(yield);
}

let generatorObj4 = generatorFn4("foo");

generatorObj4.next("bar"); // foo
generatorObj4.next("baz"); // baz 这里的next被yield控制了输出
generatorObj4.next("qux"); // qux 这里的next被yield控制了输出
generatorObj4.next("test"); // 无输出

// yield 关键字可以同时用于输入和输出
function *generatorFn5() {
    return yield "foo";
}

let generatorObj5 = generatorFn5();
console.log(generatorObj5.next()); // { value: 'foo', done: false }
console.log(generatorObj5.next("bar")); // { value: 'bar', done: true }
console.log(generatorObj5.next("baz")); // { value: undefined, done: true }

// yield 关键字并非只能使用一次。比如，以下代码就定义了一个无穷计数生成器函数
function *nTimes(params) {
    for (let i = 0; i < params; i++) {
        yield i;
    }
}

for (const item of nTimes(4)) {
    console.log(item);
}

// 使用while循环
function *nTimeWhile(params) {
    let i = 0;
    while(params--) {
        yield i++;
    }
}
// 填充数组
console.log(Array.from(nTimeWhile(8))); // [ 0, 1, 2, 3, 4, 5, 6, 7 ]

/*
 * 产生可迭代对象
 * 可以使用星号增强 yield 的行为，让它能够迭代一个可迭代对象，从而一次产出一个值
 */
// 原始写法：
function *generatorFn6() {
    for (const item of [1, 2, 3]) {
        yield item;
    }
}

for (const item of generatorFn6()) {
    console.log(item);
}

// 增强写法
function *generatorFn7() {
    yield *[1, 2, 3]
}

for (const item of generatorFn7()) {
    console.log(item);
}

/**
 * 使用 yield*实现递归算法
 * yield*最有用的地方是实现递归操作，此时生成器可以产生自身
 */
function *generatorFn8(params) {
    if (params > 0) {
        yield *generatorFn8(params - 1);
        yield params - 1
    }
}

for (const item of generatorFn8(5)) {
    console.log(item);
}

