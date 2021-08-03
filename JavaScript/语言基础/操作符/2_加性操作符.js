{
    console.log("null", 5 + null); // 5 null 会被转为0
    console.log("undefined", 5 + undefined); // NaN
    console.log("true", 5 + true); // 6
    console.log("false", 5 + false); // 5
    console.log("string", 5 + "5"); // "55"
}