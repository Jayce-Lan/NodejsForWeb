// shift
{
    let arr = new Array();
    arr.push("red", "blue");
    arr.push("yellow");
    console.log(arr); // [ 'red', 'blue', 'yellow' ]

    let item = arr.shift();
    console.log(item); // red
    console.log(arr); // Array(2) ["blue", "yellow"]
}

// unshift
{
    let arr = ["red", "blue", "yellow"];

    let count = arr.unshift("black");

    console.log(count); // 4
    console.log(arr); // Array(4) ["black", "red", "blue", "yellow"]
}