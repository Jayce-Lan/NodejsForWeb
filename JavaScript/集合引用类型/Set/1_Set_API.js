/*
 * @Author: Jayce
 * @Date: 2021-10-26 09:16:19
 * @LastEditTime: 2021-11-03 11:03:23
 */

// 使用 new 关键字构造一个空白集合
{
    const m = new Set();
}

// 创建时初始化实例
{
    // 使用数组初始化集合
    const s1 = new Set(["value1", "value2", "value3"]);
    console.log(s1.size); // 3
    console.log(s1); // Set(3) { 'value1', 'value2', 'value3' }

    // 使用自定义迭代器初始化集合
    const s2 = new Set({
        [Symbol.iterator] : function * () {
            yield "value1";
            yield "value2";
            yield "value3";
        }
    })
    console.log(s2.size); // 3
    console.log(s2); // Set(3) { 'value1', 'value2', 'value3' }
}

// 初始化后的操作
{
    const s = new Set();
    console.log("初始化的 s.has(\"Jayce\")", s.has("Jayce")); // 初始化的 s.has("Jayce") false
    console.log("初始化的 s.size", s.size); // 初始化的 s.size 0
    console.log("初始化的 s", s); // 初始化的 s Set(0) {}

    // 为 Set 添加合集
    s.add("Jayce")
        .add("Lan")
        .add("jayce")
        .add("Test")
        .add("JavaScript");

    console.log("add后的 s.has(\"Jayce\")", s.has("Jayce")); // add后的 s.has("Jayce") true
    console.log("add后的 s.size", s.size); // add后的 s.size 5
    console.log("add后的 s", s); // add后的 s Set(5) { 'Jayce', 'Lan', 'jayce', 'Test', 'JavaScript' }

    // 删除单个合集
    s.delete("jayce");
        // .delete("Test"); // TypeError: s.delete(...).delete is not a function 不能连续的 delete
    
    console.log("delete后的 s.has(\"Jayce\")", s.has("Jayce")); // delete后的 s.has("Jayce") true
    console.log("delete后的 s.has(\"jayce\")", s.has("jayce")); // delete后的 s.has("jayce") false
    console.log("delete后的 s.size", s.size); // delete后的 s.size 4
    console.log("delete后的 s", s); // delete后的 s Set(4) { 'Jayce', 'Lan', 'Test', 'JavaScript' }

    // 销毁集合中的所有实例
    s.clear();
    console.log("clear后的 s", s); // clear后的 s Set(0) {}
}

// 初始化后直接添加元素
{
    const s = new Set().add("Jayce")
                        .add("Lan");
    
    console.log(s); // Set(2) { 'Jayce', 'Lan' }
}

// Set可以包含任何 JavaScript类型
{
    const s = new Set();
    const functionValue = function () {};
    const symbolValue = Symbol();
    const objValue = new Object();

    s.add(functionValue)
        .add(symbolValue)
        .add(objValue);

    console.log(s.has(functionValue)); // true
    console.log(s.has(symbolValue)); // true
    console.log(s.has(objValue)); // true

    // SameValueZero检查意味着独立的实例不会冲突
    console.log(s.has(function () {})); // false
    console.log(s); // Set(3) { [Function: functionValue], Symbol(), {} }
}

// 集合类型自己内容被修改
{
    const s = new Set();
    const obj = {},
            arr = [];
    
    s.add(obj).add(arr);

    console.log(s); // // Set(2) { {}, [] }

    obj.bar = "bar";
    arr.push("bar"); 
    console.log(s); // Set(2) { { bar: 'bar' }, [ 'bar' ] }
}

// add()和delete()
{
    const s = new Set();
    s.add("foo");
    console.log(s.size); // 1
    s.add("foo");
    console.log(s.size); // 1

    console.log(s.delete("foo")); // true
    console.log(s.delete("foo")); // false
}