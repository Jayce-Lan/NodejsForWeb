// 反转数组
var numArr = [1, 2, 3, 4, 5];
numArr.reverse();
console.log(numArr.toString()); // 5,4,3,2,1

var str = "Hello, World!"

function reverseStr (str) {
    var strArr = str.split("").reverse();
    var reverse_str = "";
    for (var i = 0; i < strArr.length; i++) {
        reverse_str += strArr[i];
    }
    return reverse_str;
}

function reverseStrJoin (str) {
    return str.split("").reverse().join("");
}

console.log(reverseStrJoin(str))

console.log(reverseStr(str));

// 数组排序
var srtArr = ["Zoom", "Davie", "Jim", "Jack", "Tim", "Willa"];
console.log(srtArr.sort()); // [ 'Davie', 'Jack', 'Jim', 'Tim', 'Willa', 'Zoom' ]

// 排序数字
var nums = [1, 3, 2, 200, 6, 400, 4];
console.log(nums.sort().toString()); // 1,2,200,3,4,400,6

/**
 * 该函数可以是一个简单的相减操作，从一个数字中减去另外一个数字。
 * 如果结果为负，那么被减数小于减数；
 * 如果结果为0，那么被减数与减数相等；
 * 如果结果为正，那么被减数大于减数
 *
 * @param num1
 * @param num2
 * @returns {number}
 */
function compare (num1, num2) {
    return num1 - num2;
}

nums = [1, 3, 2, 200, 6, 400, 4];
console.log(nums.sort(compare).toString());