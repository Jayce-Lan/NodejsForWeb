var numArr = [1, 2, 3, 4, 5];
numArr.pop();
console.log(numArr.toString()); // 1,2,3,4

// 删除数组第一位元素的实现
function shiftDemo(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return arr;
}

numArr = [1, 2, 3, 4, 5];
console.log(shiftDemo(numArr).toString()); // 2,3,4,5

numArr = [1, 2, 3, 4, 5];
numArr.shift();
console.log(numArr.toString()); // 2,3,4,5

numArr = [6, 1, 2, 3, 4, 5];
var first  = numArr.shift();
numArr.push(first);
console.log(numArr.toString()); // 1,2,3,4,5,6