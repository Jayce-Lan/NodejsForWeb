{
    let intNum = 55;
    console.log("intNum", intNum);

    let num = 0o70; // 八进制
    console.log("num", num); // 56

    num = 1.; // 小数点后没有数字，当作1处理
    console.log("num", num); // 1
}

// 精度问题
{

    console.log(.1 + .2); // 0.30000000000000004
    console.log(.15 + .15); // 0.3

    console.log((.1 * 100 + .2 * 100) / 100); // .3
}

// isFinite
{
    let num = Number.MAX_VALUE;
    let maxNum = num * 2;
    console.log(num + 1);
    console.log(isFinite(num)); // true
    console.log(isFinite(maxNum)); // false

    console.log(isFinite(Number.NEGATIVE_INFINITY)); // 获取正无限大值 false
    console.log(isFinite(Number.POSITIVE_INFINITY)); // 获取负无限大值 false
}

// NaN
{
    console.log("0", 0 / 0); // NaN
    console.log("0", -0 / +0); // NaN

    console.log("无穷大", 5 / 0); // Infinity
    console.log("无穷大", -5 / 0); // -Infinity

    console.log("=========================NaN=========================")

    console.log(NaN == NaN); // false
    console.log(isNaN(NaN)); // true
    console.log(isNaN(10)); // false
    console.log(isNaN("10")); // false 可以转化为数值10
    console.log(isNaN(true)); // false 可以转为数字1
    console.log(isNaN("11a")); // true
    console.log(isNaN("Hello")); // true
}

// 数值转换 Number()
{
    console.log("====================数值转换==================");
    console.log("boolean", Number(true)); // 1
    console.log("boolean", Number(false)); // 0
    console.log("null", Number(null)); // 0
    console.log("undefined", Number(undefined)); // NaN
    console.log("string", Number("-11")); // -11
    console.log("string", Number(".8")); // 0.8
    console.log("string", Number("0xf")); // 15
    console.log("string", Number("11C")); // NaN
    console.log("string", Number("")); // 0
    console.log("string", Number("String")); // NaN
    let obj = {name: "Tome"}
    console.log("obj", Number(obj)); // NaN
}

// 数值转换 parseInt()
{
    console.log("====================数值转换==================");
    console.log("string", parseInt("1234CCC")); // 1234
    console.log("string", parseInt("CCC1234")); // NaN
    console.log("string", parseInt("70")); // 70
    console.log("string", parseInt("")); // NaN
    console.log("null", parseInt(null)); // NaN
    console.log("十六进制", parseInt("0xA")); // 10
    console.log("number", parseInt(22.5)); // 22

    console.log("二进制", parseInt(10, 2)); // 2
    console.log("八进制", parseInt(10, 8)); // 8
    console.log("十进制", parseInt(10, 10)); // 10
    console.log("十六进制", parseInt(10, 16)); // 16
}

// 数值转换 parseFloat()
{
    console.log("====================数值转换==================");
    console.log("string", parseFloat("123CCC")); // 123
    console.log("string", parseFloat("CCC123")); // NaN
    console.log("string", parseFloat("0xA")); // 0
    console.log("string", parseFloat("22.5")); // 22.5
    console.log("number", parseFloat("22.6.7")); // 22.6
    console.log("number", parseFloat("0980.777")); // 980.777
    console.log("number", parseFloat("3.125e7")); // 31250000
}