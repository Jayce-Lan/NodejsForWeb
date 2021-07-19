function factorial (num) {
    if (num == 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

// 方法内调用方法本身 即为完成了一次递归

console.log(factorial(5));