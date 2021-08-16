{
    let colors = ["red", "yellow", "blue", "green"];
    console.log(colors[0]); // red
    colors[2] = "black"; // 修改数组
    colors[4] = "brown"; // 修改数组
    console.log(colors); // Array(5) ["red", "yellow", "black", "green", "brown"]
}

{
    let colors = ["red", "yellow", "blue", "green"];
    let names = [];
    console.log(colors.length); // 4
    console.log(names.length); // 0

    colors.length = 2;
    console.log(colors[2]); // undefined
    console.log(colors); // Array(2) ["red", "yellow"]

    colors = ["red", "yellow", "blue"];
    colors.length = 4;
    console.log(colors[3]); // undefined

    colors = ["red", "yellow", "blue"];
    colors[colors.length] = "black";
    colors[colors.length] = "brown";
    console.log(colors); // Array(5) ["red", "yellow", "blue", "black", "brown"]

    colors = ["red", "yellow", "blue"];
    colors[99] = "black";
    // 这中间的所有元素，即位置3~98，实际上并不存在，因此在访问时会返回undefined
    console.log(colors); // Array(100) ["red", "yellow", "blue", "black"]
}