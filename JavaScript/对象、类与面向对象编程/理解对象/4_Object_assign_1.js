/*
 * @Author: Jayce
 * @Date: 2021-11-10 17:09:56
 * @Description: 合并对象
 *               ECMAScript 6 专门为合并对象提供了 Object.assign()方法
 */

/**
 * 简单复制
 */
let dest, src, result;

dest = {};
src = {id: "src"};

// Object.assign 会修改目标对象，也会返回被修改后的目标对象
result = Object.assign(dest, src);

console.log(dest === result); // true
console.log(dest === src); // false

console.log(result); // { id: 'src' }
console.log(dest); // { id: 'src' }

/**
 * 多个源对象
 */
dest = {};
result = Object.assign(dest, {a: "foo"}, {b: "bar"});
console.log(result); // { a: 'foo', b: 'bar' }
console.log(dest); // { a: 'foo', b: 'bar' }


/**
 * 获取函数与设置函数
 * 
 * 这里的 setter 并不进行赋值操作，实际上并未把值转过来
 */
dest = {
    set a(value) {
        console.log(`调用了dest的setter方法，被设值为 ${value}`);
    }
};

src = {
    get a() {
        console.log("调用了src的getter方法");
        return "foo";
    }
}

Object.assign(dest, src);
//调用了src的getter方法
//调用了dest的setter方法，被设值为 foo
console.log(dest); // { a: [Setter] }
console.log(dest.a); // undefined


