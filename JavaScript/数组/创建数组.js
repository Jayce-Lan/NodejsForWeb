var arr1 = [];
console.log("数组长度：", arr1.length); // 0

var arr2 = [1, 2, 3, 4, 5];
console.log("数组长度：", arr2.length); // 5

var arr3 = new Array();
console.log("数组长度：", arr3.length); // 0

var arr4 = new Array(5)
console.log("数组长度：", arr4.length); // 5

var arr5 = new Array(1, 2, 3, 4, 5)
console.log("数组长度：", arr5.length); // 5

var obj = [1, 'Test', true, null];
console.log(obj.length); // 4

var num = 3;
console.log(Array.isArray(num)); // false
console.log(Array.isArray(obj)); // true