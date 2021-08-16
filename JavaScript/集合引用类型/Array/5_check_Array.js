{
    let arr = [1, 2, 3, 4, 5];
    let arr2 = [1, undefined, null, "Test"];
    let str = "test";

    console.log("instanceof", arr instanceof Array); // instanceof true
    console.log("instanceof", arr2 instanceof Array); // instanceof true
    console.log("instanceof", str instanceof Array); // instanceof false

    console.log("Array.isArray", Array.isArray(arr)); // Array.isArray true
    console.log("Array.isArray", Array.isArray(arr2)); // Array.isArray true
    console.log("Array.isArray", Array.isArray(str)); // Array.isArray false
}