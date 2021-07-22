// forEach
function square(num) {
    // console.log(num, num * num);
    console.log(num)
}

var nums = [2, 2, 3, 4, 5];
// nums.forEach(square);

// every
function isEven(num) {
    return num % 2 === 0;
}

nums = [1, 2, 4, 6, 8, 10];

function everyFunc (arr) {
    let evenFlag = nums.every(isEven);
    if (evenFlag) {
        return "数组内全为偶数";
    } else {
        return "数组内不全为偶数";
    }
}

// console.log(everyFunc(nums))


// some
nums = [1, 3, 5 , 7, 9];
function someFunc (arr) {
    let evenFlag = nums.some(isEven);
    if (evenFlag) {
        return "数组中有偶数元素";
    } else {
        return "数组中无偶数元素";
    }
}

console.log(someFunc(nums));


// reduce
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

var sum = nums.reduce(add);
console.log(sum)

nums = ['Hello', 'World', "!"]
sum = nums.reduceRight(add);
console.log(sum)