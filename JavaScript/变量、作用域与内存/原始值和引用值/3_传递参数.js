{
    function addNum(num) {
        num += 10;
        return num;
    }

    let num = 20;
    let addNumValue = addNum(num);
    console.log("num", num); // 20
    console.log("addNumValue", addNumValue); // 30
}

{
    function setName(obj, str) {
        obj.name = str
    }

    let obj = new Object();
    console.log("obj", obj); // {}
    setName(obj, "Jayce");
    console.log("obj", obj); // { name: 'Jayce' }
}

{
    function setName(obj) {
        obj.name = "Jayce";
        obj = new Object();
        obj = "Tome";
    }

    let obj = new Object();
    console.log("obj", obj); // {}
    setName(obj);
    console.log("obj", obj); // { name: 'Jayce' }
}