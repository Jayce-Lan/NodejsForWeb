let arr = [1, 2, 3, null, undefined, "test"];

console.log("toString>>>", arr.toString()); // 1,2,3,,,test
console.log("toString>>>", typeof arr.toString()); // string
console.log("valueOf>>>", arr.valueOf()); // Array(6) [1, 2, 3, null, undefined, "test"]
console.log("valueOf>>>", typeof arr.valueOf()); // object
console.log("arr>>>", arr); // Array(6) [1, 2, 3, null, undefined, "test"]

console.log("==================person=================");

let person1 = {
    toString() {
        return "Jayce";
    },
    toLocaleString() {
        return "Jayce Lan";
    }
}

let person2 = {
    toString() {
        return "Eason";
    },
    toLocaleString() {
        return "Eason Chan";
    }
}

let persons = [person1, person2];
console.log("persons", persons);
console.log("toString", persons.toString());
console.log("toLocaleString", persons.toLocaleString());
