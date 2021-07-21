// push
var numArr = [1, 2, 3, 4, 5];
console.log(numArr.toString()); // 1,2,3,4,5
numArr.push(6);
console.log(numArr.toString()); // 1,2,3,4,5,6

// push方法的实现：
function pushDemo(arr, obj) {
    arr[arr.length] = obj;
}

numArr = [1, 2, 3, 4, 5];
pushDemo(numArr, 6);
console.log(numArr.toString()); // 1,2,3,4,5,6

// unshift
numArr = [2, 3, 4, 5];
numArr.unshift(1);
console.log(numArr.toString());


// unshift方法实现
function unshiftDemo(arr, obj) {
    var N = arr.length;
    for (var i = N; i >= 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = obj
}
numArr = [2, 3, 4, 5];
unshiftDemo(numArr, 1);
console.log(numArr.toString());

