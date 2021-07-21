// splice
var nums = [1, 2, 3, 7, 8];
var addElement = [4, 5, 6];
nums.splice(3, 0, addElement);
console.log(nums.toString()); // 1,2,3,4,5,6,7,8
console.log(nums.length); // 6 由于插入的元素为数组，因此形成了一个二维数组

nums = [1, 2, 3, 7, 8];
nums.splice(3, 0, 4, 5, 6)
console.log(nums.toString()); // 1,2,3,4,5,6,7,8
console.log(nums.length); // 8


// 删除数组元素
nums = [1, 2, 3, 7, 8, 4, 5];
nums.splice(3, 2);
console.log(nums.toString()); // 1,2,3,4,5