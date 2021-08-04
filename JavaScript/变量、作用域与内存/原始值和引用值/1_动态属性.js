// 引用值添加属性
{
    let person = new Object();
    person.name = "Jayce";
    console.log(person); // { name: 'Jayce' }
    console.log(person.name); // Jayce
}

// 原始值不能添加属性
{
    let person = "Jayce";
    person.age = 26;
    console.log(person); // Jayce
    console.log(person.age); // undefined
}

// 使用 new 关键字创建对象
{
    let name1 = "Jayce";
    let name2 = new String("Jayce");
    name1.age = 26;
    name2.age = 26;

    console.log(name1); // Jayce
    console.log(name2); // [String: 'Jayce'] { age: 26 }
    console.log(name2.toString()); // Jayce

    console.log(name1.age); // undefined
    console.log(name2.age); // 26
}

{
    let arr = [1, 2, 3, 4, 5];
    let arrCopy = arr; // 浅拷贝
    let arrMapCopy = arr.map(item => item); // 深拷贝

    console.log("arr", arr);
    console.log("arrCopy", arrCopy);
    console.log("arrMapCopy", arrMapCopy);

    arrCopy[2] = 10;
    console.log("arr", arr);
    console.log("arrCopy", arrCopy);
    console.log("arrMapCopy", arrMapCopy);
}