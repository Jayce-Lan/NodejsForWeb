// from
{
    // 将字符串拆分为数组
    console.log("string", Array.from("Test Array")); //  Array(10) ["T", "e", "s", "t", " ", "A", "r", "r", "a", "y"]

    // 将集合和映射转换为新数组
    const map = new Map();
    map.set(1, 2)
        .set(3, 4)
        .set(5, 6);

    const set = new Set();
    set.add(1)
        .add(2)
        .add(3)
        .add(4);

    console.log("map", Array.from(map)); // Array(3) [[1, 2], [3, 4], [5, 6]]
    console.log("set", Array.from(set)); // Array(4) [1, 2, 3, 4]

    // 对已有数组进行浅拷贝
    const arr1 = [1, 2, 3, 4];
    const arr2 = Array.from(arr1);
    console.log(arr1); // [ 1, 2, 3, 4 ]
    console.log(arr2); // [ 1, 2, 3, 4 ]
    arr2[2] = 6;
    console.log(arr1); // [ 1, 2, 3, 4 ]
    console.log(arr2); // [ 1, 2, 6, 4 ]

    // 可以使用任何可迭代对象
    const iter = {
        *[Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
        }
    };

    console.log(iter); // {Symbol(Symbol.iterator): Function}
    console.log(typeof iter); // Object
    console.log(Array.from(iter)); // Array(4) [1, 2, 3, 4]

    // arguments 对象可以被转为数组
    function getArgsArray(...args) {
        return Array.from(args);
    }

    console.log(getArgsArray(1, 2, 3, 4, 5)); // Array(5) [1, 2, 3, 4, 5]

    // 带有必要属性的自定义对象
    const obj = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        length: 4
    }

    console.log(Array.from(obj)); // Array(4) [1, 2, 3, 4]

    // 传入多个参数
    let a1 = [1, 2, 3, 4];
    let a2 = Array.from(a1, item => item ** 2);
    console.log("传入两个参数", a2); // Array(4) [1, 4, 9, 16]

    let a3 = Array.from(a1, function (item) {
        return item ** this.exponent
    }, {exponent: 3});
    console.log("传入三个参数", a3); // Array(4) [1, 8, 27, 64]
}

{
    console.log(Array.of(1, 2, 3, 4)); // Array(4) [1, 2, 3, 4]
    console.log(Array.of(undefined)); // Array(1) [undefined]
}