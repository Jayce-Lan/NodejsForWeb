let arr = [1, 2, 3, 4, 5];

console.log(arr.fill(6)); // Array(5) [6, 6, 6, 6, 6]
console.log(arr); // Array(5) [6, 6, 6, 6, 6]

arr = [1, 2, 3, 4, 5];

// 填充索引 >= 3 的元素
console.log(arr.fill(6, 3)); // Array(5) [1, 2, 3, 6, 6]

arr = [1, 2, 3, 4, 5];

// 填充 索引 1 - 3 （不包括3）的元素
console.log(arr.fill(6, 1, 3)); // Array(5) [1, 6, 6, 4, 5]

arr = [1, 2, 3, 4, 5];

/*
填充索引 1 - 4（不包括4）的元素
1 = 5 - 4
4 = 5 - 1
 */
console.log(arr.fill(6, -4, -1)); // Array(5) [1, 6, 6, 6, 5]

arr = [1, 2, 3, 4, 5];
// 忽略数组越界，索引过低以及反向问题
console.log(arr.fill(6, -1, -4)); // Array(5) [1, 2, 3, 4, 5]
console.log(arr.fill(6, 4, 10)); // Array(5) [1, 2, 3, 4, 6]
