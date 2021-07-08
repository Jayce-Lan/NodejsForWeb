const express = require("express")  //express不需要导入http模块
const app = express()

//使用app.get("/端口地址", 返回值)
app.get("/hello", (req, res) => {
    res.send("Hello World!")
    console.log("127.0.0.1:8081")
})

app.listen(8081)

//以上的也可以换为下面的写法
//app.get("/hello", (req, res) => res.send("Hello World!"))

// app.listen(8081, () => console.log("127.0.0.1:8081"))