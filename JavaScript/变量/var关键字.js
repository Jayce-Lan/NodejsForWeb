function foo () {
    console.log(age);
    var age = 20;
}

// foo(); // undefined

function varTest () {
    if (true) {
        var msg = "Hello World";
        console.log(msg);
    }
    console.log(msg);
}

// varTest();

function letTest () {
    if (true) {
        let msg = "Hello World";
        console.log(msg);
    }
    console.log(msg)
}

// letTest(); // ReferenceError: msg is not defined

function varTest2 () {
    var msg = "Hello World";
    console.log(msg); // Hello World
    if (true) {
        var msg = "Hello";
        console.log(msg); // Hello
    }
    console.log(msg); // Hello
}

// varTest2();

function letTest2 () {
    let num = 10;
    console.log(num); // 10
    if (true) {
        let num = 20;
        console.log(num); // 20
    }
    console.log(num); // 10
}

// letTest2();
