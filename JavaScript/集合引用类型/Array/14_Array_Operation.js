// concat
{
    console.log("=============concat=============");
    let arr = ["red", "blue", "yellow"];
    let concatArr = arr.concat("black", ["brown", "pink"]);
    console.log("arr", arr); // Array(3) ["red", "blue", "yellow"]
    console.log("concatArr", concatArr); // Array(6) ["red", "blue", "yellow", "black", "brown", "pink"]

    let colors = ["red", "green", "blue"];
    let newColors = ["black", "brown"];
    let moreNewColors = {
        [Symbol.isConcatSpreadable]: true,
        length: 2,
        0: "pink",
        1: "cyan"
    };

    newColors[Symbol.isConcatSpreadable] = false;
    // 强制不打平数组
    let colors2 = colors.concat("yellow", newColors); // Array(5) ["red", "green", "blue", "yellow", Array(2)]
    // 强制打平数组对象
    let colors3 = colors.concat(moreNewColors); // Array(5) ["red", "green", "blue", "pink", "cyan"]

    console.log("colors2", colors2);
    console.log("colors3", colors3);
}

// slice
{
    let arr = ["yellow", "red", "blue", "black", "pink"];
    let newArr1 = arr.slice(1);
    let newArr = arr.slice(1, 4);

    console.log(newArr1); // Array(4) ["red", "blue", "black", "pink"]
    console.log(newArr); // Array(3) ["red", "blue", "black"]

    console.log(arr.slice(-3, -1)); // Array(2) ["blue", "black"]
    console.log(arr.slice(4, 3)); // Array(0) []
    console.log(arr.slice(-1, -2)); // Array(0) []
}

// splice
{
    let arr,
        reset = ()=> arr = [1, 2, 3, 4, 5];

    reset();
    console.log(arr);

    // 删除元素
    // 从索引 3 开始的位置删除2个元素
    arr.splice(3, 2);
    console.log(arr); // Array(3) [1, 2, 3]

    reset();
    arr.splice(-2, 1);
    console.log(arr); // 从索引 -2 （length - 2）删除一个元素 Array(4) [1, 2, 3, 5]

    // 无数组越界
    reset();
    arr.splice(3, 3);
    console.log(arr);
    reset();
    arr.splice(5, 1);
    console.log(arr);

    // 插入元素
    reset();
    arr.splice(2, 0, "item1", "item2");
    console.log(arr); // Array(7) [1, 2, "item1", "item2", 3, 4, 5] 从数组的 2索引处插入元素

    reset();
    const itemArr = [6, 7, 8];
    arr.splice(2, 0, itemArr);
    console.log(arr); // Array(6) [1, 2, Array(3), 3, 4, 5]

    // 替换元素（其实可以理解为先删除后添加）
    reset();
    arr.splice(3, 2, 6, 7 ,8);
    console.log(arr); // Array(6) [1, 2, 3, 6, 7, 8]

    reset();
    arr.splice(-3, 2, 6, 7 ,8);
    console.log(arr); // Array(6) [1, 2, 6, 7, 8, 5]

    // 添加
    reset();
    arr.splice(3, 0, 6, 7, 8);
    console.log(arr); // Array(8) [1, 2, 3, 6, 7, 8, 4, 5]
}