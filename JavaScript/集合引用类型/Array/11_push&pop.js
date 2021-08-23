// push
{
    let pushArr = new Array();
    let countPush = pushArr.push("red", "yellow");
    console.log(pushArr); // [ 'red', 'yellow' ]
    console.log(countPush); // 2

    let arr = ["black", "blue"];
    countPush = pushArr.push(arr);

    console.log(pushArr); // [ 'red', 'yellow', [ 'black', 'blue' ] ]
    console.log(countPush); // 3
}

// pop
{
    let popArr = ["red", "blue", "yellow", "black"];
    let popItem = popArr.pop();

    console.log(popArr); // [ 'red', 'blue', 'yellow' ]
    console.log(popItem); // black
}

