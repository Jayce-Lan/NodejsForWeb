// type of
{
    let str = "Hello";
    let _number = 22;
    let _boolean = true;
    let booleanObj = new Boolean();
    let _undefined;
    let _null = null;
    let obj = new Object();

    console.log("str", typeof str); // str
    console.log("number", typeof _number); // number
    console.log("boolean", typeof _boolean); // boolean
    console.log("booleanObj", typeof booleanObj); // object
    console.log("undefined", typeof _undefined); // undefined
    console.log("null", typeof _null); // object
    console.log("obj", typeof obj); // object
}

{
    let num = 22;
    let numObj = new Number(22);

    console.log("num", num instanceof Number); // false
    console.log("num", num instanceof Object); // false
    console.log("numObj", numObj instanceof Number); // true
    console.log("numObj", numObj instanceof Object); // true
    console.log(num == numObj); // true
}