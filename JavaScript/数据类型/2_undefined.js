{
    let msg;
    console.log(msg === undefined); // true

    msg = undefined;
    console.log(msg === undefined); // true
}

{
    let msg;
    console.log(msg); // undefined
    // console.log(age); // 报错age is not defined
    if (msg) {
        console.log("这里不会被执行");
    }
    if (!msg) {
        console.log("这里会被执行");
    }
    if (age) {
        console.log("这里会报错");
    }
}