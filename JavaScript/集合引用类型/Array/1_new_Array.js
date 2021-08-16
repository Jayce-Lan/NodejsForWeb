{
    let arr = new Array();
    console.log(typeof arr); // object
    let arr2 = [];
    console.log(typeof arr2); // object

    let arr3 = new Array(3); // Array(3) []
    console.log(arr3);
    let arr4 = new Array(3, 4,); // Array(2) [3, 4]
    console.log(arr4);
    let arr5 = new Array("item"); // Array(1) ["item"]
    console.log(arr5);
    let arr6 = Array("item", 3); // Array(2) ["item", 3]
    console.log(arr6);
}

{
    let arr = [];
    console.log(typeof arr); // object

    let arr1 = [];
    console.log(arr1);
    let arr2 = [1, 2,]; // Array(2) [1, 2]
    console.log(arr2);
    let arr3 = ["item1", "item2", 3]; // Array(3) ["item1", "item2", 3]
    console.log(arr3);
}