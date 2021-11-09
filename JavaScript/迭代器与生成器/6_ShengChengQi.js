/*
 * @Author: Jayce
 * @Date: 2021-11-08 20:22:56
 * @Description: 生成器
 * 生成器是 ECMAScript 6 新增的一个极为灵活的结构，拥有在一个函数块内暂停和恢复代码执行的
 * 能力。这种新能力具有深远的影响，比如，使用生成器可以自定义迭代器和实现协程
 */

// 生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。只要是可以定义函数的地方，就可以定义生成器
// 箭头函数不能用来定义生成器函数

// 生成器函数声明
function * generatroEn1() {

}

// 生成器函数表达式
let generatroEn2 = function * () {  }

// 对象字面量方法的生成器函数
let foo = {
    * generatroEn3 () {

    }
}

// 作为类实例方法的生成器函数
class Foo {
    * generatroEn4() {}
}

// 作为静态方法的生成器函数
class Bar {
    static * generatroEn5() {

    }
}

// 以下写法均为等价
function* generatroEnA() {}
function *generatroEnB() {}
function * generatroEnC() {}


const g = generatroEnA();
console.log(g); // Object [Generator] {}
console.log(g.next); // [Function: next]
console.log(g.next()); // { value: undefined, done: true }

// value 属性是生成器函数的返回值，默认值为 undefined，可以通过生成器函数的返回值指定
function *generatroFn() {
    return "foo";
}

let generatorObj = generatroFn();
console.log(generatorObj); // Object [Generator] {} 
console.log(generatorObj.next()); // { value: 'foo', done: true } 

// 生成器函数只会在初次调用 next()方法后开始执行
function *generatroFn2() {
    console.log("foo");
}

// 初次调用函数不会打印日志
let generatorObj2 = generatroFn2();
console.log("log...");
generatorObj2.next(); // foo

// 生成器对象实现了 Iterable 接口，它们默认的迭代器是自引用的

function *generatroFn3() { }
let generatorObj3 = generatroFn3();
console.log(generatorObj3 === generatorObj3[Symbol.iterator]()); // true
