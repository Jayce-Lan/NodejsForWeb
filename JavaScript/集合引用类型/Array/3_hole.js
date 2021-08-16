// 数组空位
{
    const arr = [, , , , ,];
    console.log(arr.length); // 5
    console.log(arr); // [ <5 empty items> ]
}

{
    function itemIsUndefined(arr) {
        for (const item of arr) {
            console.log("item 为空：", item === undefined);
        }
    }

    const arr = [1, , , , 5];
    itemIsUndefined(arr); // false true true true false

    const arr2 = Array.from([, , ,]);
    itemIsUndefined(arr2); // true * 3

    console.log("map", arr.map(item  => item ** 2)); // map() 会直接忽略空位
    console.log("join", arr.join("-")); // join 会将空位视为空字符串
}