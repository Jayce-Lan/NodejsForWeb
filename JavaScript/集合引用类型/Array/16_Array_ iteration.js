let arr = [1, 2, 3, 4, 5];

console.log("every", arr.every(item => item > 2)); // false
console.log("every", arr.every(item => item > 0)); // true

console.log(arr.some(item => item > 3)); // true
console.log(arr.some(item => item > 5)); // false

console.log("filter", arr.filter(item => item >2)); // Array(3) [3, 4, 5]
console.log("filter", arr.filter(item => item >0)); // Array(5) [1, 2, 3, 4, 5]
console.log("filter", arr.filter(item => item >5)); // Array(0) []

arr.forEach(item => console.log(item)); // 遍历数组

let itemArr = new Array();
arr.forEach(item => itemArr.push(item + 3));
console.log(itemArr); // Array(5) [4, 5, 6, 7, 8]
console.log(arr); // Array(5) [1, 2, 3, 4, 5]

arr.filter(item => item >2).forEach(item => console.log(item)); // 处理后循环


let newArr = arr.map(item => item * 2);
console.log(arr); // Array(5) [1, 2, 3, 4, 5]
console.log(newArr); // Array(5) [2, 4, 6, 8, 10]

// 使用map重新格式化数组中的对象

let obj = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}];

let reformattedArray = obj.map(item => {
    let newObj = {};
    newObj[item.key] = item.value;
    return newObj;
});

/*
{ key: 1, value: 10 }
{ key: 2, value: 20 }
{ key: 3, value: 30 }
 */
obj.forEach(item => console.log(item));

/*
{ '1': 10 }
{ '2': 20 }
{ '3': 30 }
 */
reformattedArray.forEach(item => console.log(item));
