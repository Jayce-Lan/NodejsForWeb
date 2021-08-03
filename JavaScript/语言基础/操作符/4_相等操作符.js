{
    let obj = {
        valueOf() {
            return 0;
        }
    }

    let object = {
        name: "Jayce",
        job: "coder"
    }

    let obj1 = object,
        obj2 = object;

    console.log(null == undefined); // true
    console.log(obj == 0); // true
    console.log(NaN == NaN); // false
    console.log(obj1 == obj2); // true
    console.log(55 == "55"); // true


    console.log(null === undefined); // false
    console.log(55 === "55"); // false
}

{
    let num = (1, 2, 3, 4, 5, 6);
    console.log(num); // 6
}