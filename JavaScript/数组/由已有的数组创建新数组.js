var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 0];

var myArr = arr1.concat(arr2);
console.log(myArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

myArr = arr2.concat(arr1);
console.log(myArr); // [6, 7, 8, 9, 0, 1, 2, 3, 4, 5]

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var testArr = arr3.splice(3, 2); // 该方法的第一个参数是截取的起始索引，第二个参数是截取的长度
console.log(testArr); // [4, 5]
console.log(arr3); // 截取后 原数组会剩下违背截取的元素 [1, 2, 3, 6, 7, 8, 9, 0]