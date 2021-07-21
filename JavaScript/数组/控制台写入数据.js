const readline = require("readline"); // 引入对应模块

// 注入 readline 模块并引入 createInterface 方法
var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("请输入：", function (msg) {
    console.log("输入的内容为: ", msg);
    rl.close();
})

// close 事件监听
rl.on("close", function () {
    process.exit(0); // 结束程序
})