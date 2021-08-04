// 复制变量
{
    let num1 = 5;
    let num2 = num1;
    num2 = 6;

    console.log("num1", num1); // 5
    console.log("num2", num2); // 6
}

// 对象的浅拷贝
{
    let obj1 = new Object();
    let obj2 = obj1;
    obj2.name = "Jayce";

    console.log("obj1", obj1); // { name: 'Jayce' }
    console.log("obj2", obj2); // { name: 'Jayce' }
}

// 对象的深拷贝
{
    let obj1 = new Object();
    let obj2 = JSON.parse(JSON.stringify(obj1));

    obj2.name = "Jayce";

    console.log("obj1", obj1); // {}
    console.log("obj2", obj2); // { name: 'Jayce' }

    console.log("obj1", typeof obj1);
    console.log("obj2", typeof obj2);
}