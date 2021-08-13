{
    let obj = {
        name: "Jayce",
        age: 25,
        "last name": "Lan",
    }

    console.log(obj.name); // Jayce

    console.log(obj["last name"]); // Lan
    let objAge = "age"
    console.log(obj[objAge]); // 25
}