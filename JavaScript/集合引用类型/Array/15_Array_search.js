// 严格相等
{
    let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    // indexOf 正向查找
    console.log("indexOf", arr.indexOf(2)); // 1
    // 如果传入第二个参数，则从该索引开始查询，如果为负数，则从 arr.length + (负数) 开始查询
    console.log("indexOf", arr.indexOf(2, 2)); // 7
    console.log("indexOf", arr.indexOf(2, -2)); // 7

    // lastIndexOf 逆向查找
    console.log("lastIndexOf", arr.lastIndexOf(3)); // 6
    // 如果该值大于或等于数组的长度，则整个数组会被查找。
    // 如果为负值，将其视为从数组末尾向前的偏移。
    // 即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找
    console.log("lastIndexOf", arr.lastIndexOf(3, 3)); // 2 (相当于只有前三位被查询)
    console.log("lastIndexOf", arr.lastIndexOf(3, -3)); // 6
    console.log("lastIndexOf", arr.lastIndexOf(3, -5)); // 2
    console.log("lastIndexOf", arr.lastIndexOf(3, -10)); // -1

    // includes
    console.log("includes", arr.includes(5)); // true
    // 从索引 3 开始查找
    console.log("includes", arr.includes(5, 3)); // true
    // 从索引 arr.length - 3 开始查找
    console.log("includes", arr.includes(5, -3)); // false
}

// 断言函数
{
    let arr = [1, 2, 3, 10, 9, 8, 5];
    // 返回实例
    console.log("find", arr.find(el => el > 9)); // 10
    // 返回索引
    console.log("findIndex", arr.findIndex(el => el > 9)); // 3

    // 用对象属性查找数组里的对象
    let objs = [
        {name: "Jayce", age: 25},
        {name: "Jack", age: 26},
        {name: "Tom", age: 30}
    ]

    function findAge(obj) {
        return obj.age > 25;
    }

    console.log("find", objs.find(findAge)); // Object {name: "Jack", age: 26}
    console.log("findIndex", objs.findIndex(findAge)); // 1

    // 这里会进行三次迭代，可以理解为 while(arr[i] === 3)
    arr.find((el, index, array) => {
        console.log(el);
        console.log(index);
        console.log(array);
        return el === 3;
    });
}