{
    console.log("============url编码方法============");
    let uri = "http://www.wrox.com/illegal value.js#start";

    console.log("encodeURI", encodeURI(uri)); // http://www.wrox.com/illegal%20value.js#start
    console.log("encodeURIComponent", encodeURIComponent(uri)); // http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start

    uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";

    console.log(decodeURI(uri)); // http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start
    console.log(decodeURIComponent(uri)); // http://www.wrox.com/illegal value.js#start
}

{
    console.log("============eval============");

    console.log("Hello JavaScript"); // Hello JavaScript
    // 互相等价
    eval(console.log("Hello JavaScript")); // Hello JavaScript

    eval(function sayHi() {
        console.log("Hi!");
    });
    // sayHi(); // Uncaught ReferenceError: sayHi is not defined
}

