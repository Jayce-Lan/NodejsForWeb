/*
 * @Author: Jayce
 * @Date: 2021-11-10 21:35:50
 * @Description: 浅拷贝
 */

let dest, src, result;

/**
 * 覆盖属性
 * 
 * 遇到相同的属性，则以最后一次出现为准
 */
dest = {id: "dest"}
result = Object.assign(dest, {id: "src1", a: "foo"}, {id: "src2", b: "bar"});
console.log(result); // { id: 'src2', a: 'foo', b: 'bar' }

// 可以通过目标对象上的设置函数观察到覆盖的过程
dest = {
    set id(value) {
        console.log(value);
    }
}
result = Object.assign(dest, {id: "src1"}, {id: "src2"}, {id: "src3"});
//src1
//src2
//src3

/**
 * 对象引用
 * 
 * 浅拷贝意味着只会复制对象的引用
 */

dest = {};
src = {a: {}};
Object.assign(dest, src);
console.log(dest); // { a: {} }
console.log(src); // { a: {} }
console.log(dest.a === src.a); // true

/**
 * 错误处理
 * 
 * 如果赋值期间出错，则操作会中止并退出，同时抛出错误。Object.assign()没有“回滚”之前赋值的概念，因此它是一个尽力而为、可能只会完成部分复制的方法
 */

dest = {};

src = {
    a: "foo",
    get b() {
        // 强制抛出异常
        throw new Error();
    },
    c: "bar"
}

try {
    Object.assign(dest, src);   
} catch (error) {
    
}
console.log(dest); // { a: 'foo' }