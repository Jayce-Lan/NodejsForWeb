# 前端开发

## Node.js

### Node.js构建项目环境

#### 使用Node.js快速写一个Hello World

*HelloWorld.js*

```javascript
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
```

随后使用`node HelloWorld.js`运行该文件，在浏览器登录 *127.0.0.1:8081* 即可访问



#### 给项目添加 *express* 依赖

> Express的功能虽然相当于上述的HTTP模块，但是不能通过require导入，需要按需安装和下载后才能使用

- 首先，在项目文件夹下运行 `npm init` 初始化项目

```shell
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs1) nodejs1
version: (1.0.0)
description: test
entry point: (index.js) app.js
test command:
git repository:
keywords:
author: Jayce
license: (ISC)
About to write to E:\MyProject\WebProject\HelloNode\nodejs1\package.json:

{
  "name": "nodejs1",
  "version": "1.0.0",
  "description": "test",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jayce",
  "license": "ISC"
}


Is this OK? (yes)
```



- 随后运行如下命令 `npm install express` 
- 项目内会出现一个 *package.json* 文件，并且 *dependencies* 模块会有 *express* 选项



#### 手动搭建一个Vue项目

