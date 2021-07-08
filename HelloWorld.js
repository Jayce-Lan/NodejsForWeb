const http = require("http");

http.createServer(function (request, response) {
    //返回HTTP头部信息
    //返回状态码，成功为200
    //返回数据类型：text/html
    //指定返回code的形式
    response.writeHead(200, {"Content-Type": "text/html"});

    //发送html的内容
    response.end("<H1>Hello World!</H1>")
}).listen(8081);    //指定端口号

console.log("127.0.0.1:8081");