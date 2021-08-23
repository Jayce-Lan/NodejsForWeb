// reverse
{
    let arr = [1, 2, 3, 4, 5];
    console.log(arr); // Array(5) [1, 2, 3, 4, 5]
    arr.reverse();
    console.log(arr); // Array(5) [5, 4, 3, 2, 1]
}

// sort
{
    let arr,
        reset = () => arr = [1, 5, 8, 10, 2, 9];
    reset();

    /**
     * 比较两数大小，并传入sort中 使得数组由小到大排序
     * @param num1
     * @param num2
     * @returns {number}
     */
    function compare(num1, num2) {
        if (num1 < num2) {
            return -1;
        }
        if (num1 > num2) {
            return 1;
        }
        return 0;
    }

    /**
     * 使得数组由大到小排序
     * @param num1
     * @param num2
     * @returns {number}
     */
    function compareReset(num1, num2) {
        if (num1 < num2) {
            return -1;
        }
        if (num1 > num2) {
            return 1;
        }
        return 0;
    }

    arr.sort();
    // 由于是匹配字符串，因此 '10' < '2'
    console.log('10' < '2'); // true
    console.log(arr); // Array(6) [1, 10, 2, 5, 8, 9]

    reset();

    arr.sort(compare);
    console.log("排序后", arr); // Array(6) [1, 2, 5, 8, 9, 10]

    // 将方法写成箭头函数
    reset();
    arr.sort((num1, num2) => (num1 < num2) ? 1 : (num1 > num2) ? -1 : 0);
    console.log(arr); // Array(6) [10, 9, 8, 5, 2, 1]

    // 进一步简化
    reset();
    arr.sort((num1, num2) => num1 - num2);
    console.log(arr); // Array(6) [1, 2, 5, 8, 9, 10]

    // 处理对象
    let objs = [
        {name: "Jayce", age: 25},
        {name: "Eason", age: 47},
        {name: "Jack", age: 24}
    ];


    objs.sort((a, b) => a.age - b.age);

    for (const item of objs) {
        console.log(item);
    }
}