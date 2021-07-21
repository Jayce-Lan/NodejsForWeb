// 由字符串生成数组
var sentence = "hello javascript this is a test js";
var words = sentence.split(" ");

var i;

    for (i = 0; i < words.length; i++) {
    console.log("words[" + i + "]: " + words[i]);
}


// 对数组整体操作 (赋值)
var nums = [];
for (i = 0; i < 100; i ++) {
    nums[i] = i + 1;
}

console.log(nums);

// 直接使用 = 的话会造成浅拷贝的问题，当我们修改拷贝对象时，被拷贝对象也会被修改
var copyNum = nums;
copyNum[0] = 100;
console.log(nums[0]); // 100
console.log(nums);

/**
 * 深拷贝数组的方法
 * @param arr 被拷贝的数组
 * @param copyArr 拷贝后的数组
 */
function copy (arr, copyArr) {
    for (let num = 0; num < arr.length; num++) {
        copyArr[num] = arr[num]
    }
}

var arrTest = [1, 2, 3, 4, 5];

var arr2 = [];

copy(arrTest, arr2);

console.log(arr2);

arr2[0] = 100;
console.log(arr2);
console.log(arrTest[0]);