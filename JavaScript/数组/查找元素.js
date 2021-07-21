const readline = require("readline");

var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var names = ["Tony", "Jim", "张三", "李四", "Jack", "Jim", "张三"];

rl.question("请输入需要查找的名字：", function (name) {
    // var position = names.indexOf(name);
    var position = names.lastIndexOf(name);
    if (position >= 0) {
        console.log("查询到姓名[" + name + "]在数组的数组下标为[" + position + "]"); // 如果name为 张三 则返回 2
    } else {
        console.log("未查询到姓名：[" + name + "]");
    }
    rl.close();
})

rl.on("close", function () {
    process.exit(0);
})