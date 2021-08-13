{
    let obj = new Object();
    obj.name = "Jayce";
    obj.age = 25;
    obj.job = "coder";
    console.log(obj); // {name: "Jayce", age: 25, job: "coder"}

    let obj2 = {}; // 等效于 new Object();
    obj2.name = "Jayce";
    obj2.age = 25;
    obj2.job = "coder";
    console.log(obj2); // { name: 'Jayce', age: 25, job: 'coder' }
}

{
    let obj = {
        name: "Jayce",
        age: 25,
        job: "coder",
    }

    console.log(obj); // { name: 'Jayce', age: 25, job: 'coder' }
}

{
    function displayInfo(args) {
        let output = "";
        if (typeof args.name === "string") {
            output += "name: " + args.name + "\n";
        }
        if (typeof args.age === "number") {
            output += "age: " + args.age + "\n";
        }
        console.log(output);
    }

    let obj1 = {
        name: "Jayce",
        age: 25,
    }

    let obj2 = {
        name: "Jack",
    }

    displayInfo(obj1); // 被打印
    displayInfo(obj2);
}