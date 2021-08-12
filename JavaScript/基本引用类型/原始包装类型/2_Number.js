{
    let numberObj = new Number(11);
    console.log(numberObj); // [Number: 11]
}

{
    let num = 10;
    console.log("toString()", num.toString()); // 10
    console.log("toString(2)", num.toString(2)); // 1010
    console.log("toString(8)", num.toString(8)); // 12
    console.log("toString(10)", num.toString(10)); // 10
    console.log("toString(16)", num.toString(16)); // a
}

// toFixed()
{
    const PI = 3.141592653;
    console.log("toFixed()", PI.toFixed()); // 3
    console.log("toFixed(2)", PI.toFixed(2)); // 3.14
    console.log("toFixed(3)", PI.toFixed(3)); // 3.142
}

// toExponential()
{
    const NUM = 10;
    console.log("toExponential()", NUM.toExponential()); // 1e+1
    console.log("toExponential(1)", NUM.toExponential(1)); // 1.0e+1
}

// toPrecision()
{
    const NUM = 99;
    // 首先要用1位数字表示数值99，得到"1e+2"，也就是100。
    // 因为99不能只用1位数字来精确表示，所以这个方法就将它舍入为100，这样就可以只用1位数字（及其科学记数法形式）来表示了
    console.log("toPrecision(1)", NUM.toPrecision(1)); // 1e+2
    console.log("toPrecision(2)", NUM.toPrecision(2)); // 99
    console.log("toPrecision(3)", NUM.toPrecision(3)); // 99.0
}

// Object and value
{
    let numObj = new Number(10);
    let numValue = 10;
    console.log("numObj", typeof numObj); // object
    console.log("numValue", typeof numValue); // number

    console.log("numObj", numObj instanceof Number); // true
    console.log("numValue", numValue instanceof Number); // false
}

// Number.isInteger()
{
    console.log(Number.isInteger(new Number(10))); // false
    console.log(Number.isInteger(new Number(10.0))); // false
    console.log(Number.isInteger(new Number(10.01))); // false
    console.log(Number.isInteger(1)); // true
    console.log(Number.isInteger(1.0)); // true
    console.log(Number.isInteger(1.01)); // false
    console.log(Number.isInteger(Number("1"))); // true
    console.log(Number.isInteger(Number("1.0"))); // true
    console.log(Number.isInteger(Number("1.01"))); // false
}

// Number.isSafeInteger()
{
    console.log("isSafeInteger", Number.isSafeInteger(-1 * (2 ** 53))); // false
    console.log("isSafeInteger", Number.isSafeInteger(-1 * (2 ** 53) + 1)); // true
    console.log("isSafeInteger", Number.isSafeInteger(2 ** 53)); // false
    console.log("isSafeInteger", Number.isSafeInteger(2 ** 53 - 1)); // true
}
