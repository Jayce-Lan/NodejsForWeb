{
    let msg = "String msg";
    let booleanValue = true;
    let num = 90;

    let obj = {
        name: "Tom",
        age: 10,
        show: function (msg) {
            return "Hello, " + this.name;
        }
    }

    console.log("msg", typeof msg);
    console.log("booleanValue", typeof booleanValue);
    console.log("num", typeof num);
    console.log("obj", typeof obj); // object
    console.log("obj", typeof obj.show); // function
}
