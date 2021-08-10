{
    let falseObj = new Boolean(false);
    console.log("falseObj", falseObj && true); // true
    console.log("falseObj", typeof falseObj); // object

    let falseValue = false;
    console.log("falseValue", falseValue && true); // false
    console.log("falseValue", typeof falseValue); // boolean
}