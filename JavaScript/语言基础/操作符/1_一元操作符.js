// 递增/递减操作
{
    // 对布尔值的操作
    let booleanValue = false;
    booleanValue++;
    console.log(booleanValue); // 1
    booleanValue = true;
    booleanValue++;
    console.log(booleanValue); // 2

    // 对浮点数的操作
    let floatNum = 1.1;
    floatNum--;
    console.log(floatNum); // 0.10000000000000009 浮点数的精度问题

    // 对对象的操作
    let obj = {
        valueOf() {
            return -1;
        }
    }

    console.log(obj); // { valueOf: [Function: valueOf] }
    obj--;
    console.log(obj); // -2

    // 对字符串的操作
    let stringValue = "11";
    stringValue--;
    console.log(stringValue); // 10
    stringValue = "Hello";
    stringValue--;
    console.log(stringValue); // NaN
}

{
    let num = Math.pow(3, 2);
    console.log(num); // 9
    num = 3 ** 2;
    console.log(num); // 9
    num = 16 ** .5;
    console.log(num); // 4

    num = 16;
    num **= .5;
    console.log(num); // 4
}
