{
    let flag = true;
    // let flag2 = True; // True is not defined
}

{
    console.log("boolean",Boolean(true)); // true
    console.log("boolean",Boolean(false)); // false

    let stringValue = "";
    console.log("string",Boolean(stringValue)); // false
    stringValue = "Hello";
    console.log("string", Boolean(stringValue)); // true

    console.log("number", Boolean(0)); // false
    console.log("number", Boolean(NaN)); // false
    console.log("number", Boolean(1)); // true

    let obj = null;
    console.log("obj", Boolean(obj)); // false
    obj = {};
    console.log("obj", Boolean(obj)); // true
    obj.name = "Tome";
    console.log("obj", Boolean(obj)); // true

    console.log("undefined", Boolean(undefined)); // false
}