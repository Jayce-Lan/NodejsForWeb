{
    console.log("================min 和 max===============");

    let max = Math.max(10, 59, 66, 8, 0, 9, -1);
    console.log("max", max); // 66

    let min = Math.min(10, 59, 66, 8, 0, 9, -1);
    console.log("min", min); // -1

    // 获取数组的最大最小值
    let arr = [-1, 3, 9, 78, 66];
    console.log("max", Math.max(...arr)); // 78
    console.log("min", Math.min(...arr)); // -1
}

{
    console.log("================舍入方法===============");

    console.log("Math.ceil", Math.ceil(25.1)); // Math.ceil 26
    console.log("Math.ceil", Math.ceil(25.4)); // Math.ceil 26
    console.log("Math.ceil", Math.ceil(25.5)); // Math.ceil 26
    console.log("Math.ceil", Math.ceil(25.9)); // Math.ceil 26

    console.log("Math.floor", Math.floor(25.1)); // Math.floor 25
    console.log("Math.floor", Math.floor(25.4)); // Math.floor 25
    console.log("Math.floor", Math.floor(25.5)); // Math.floor 25
    console.log("Math.floor", Math.floor(25.9)); // Math.floor 25

    console.log("Math.round", Math.round(25.1)); // Math.round 25
    console.log("Math.round", Math.round(25.4)); // Math.round 25
    console.log("Math.round", Math.round(25.5)); // Math.round 26
    console.log("Math.round", Math.round(25.9)); // Math.round 26

    console.log("Math.fround", Math.fround(.1)); // Math.fround 0.10000000149011612
    console.log("Math.fround", Math.fround(.4)); // Math.fround 0.4000000059604645
    console.log("Math.fround", Math.fround(.5)); // Math.fround 0.5
    console.log("Math.fround", Math.fround(.9)); // Math.fround 0.8999999761581421
}

{
    console.log("================random===============");
    // 取 1-10 的整数
    let randomNum = Math.floor(Math.random() * 10 + 1);
    console.log(randomNum);

    // 取 2-10 的整数
    randomNum = Math.floor(Math.random() * 9 + 2);
    console.log(randomNum);

}