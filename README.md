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

##### 具体步骤

- 首先搭建一个项目，并使用 `npm init` 初始化
- 安装 webpack ，使用如下命令 `npm install webpack`
- 安装 webpack 命令工具，使用如下命令 `npm install webpack-cli`
- 安装 Vue.js ，使用如下命令：`npm install vue`
- 安装 vue-loader 和 vue-template-compiler ，这样才可以让Webpack识别Vue.js 使用如下命令：`npm install vue-loader`  以及 `npm install vue-template-compiler` 
- 安装完成后 *package.json* 如下：

```json
//注意！此处的vue-loader 建议使用 15.7.0  版本，否则文件下无 vue-loader/lib/plugin 
{
  "name": "testvue",
  "version": "1.0.0",
  "description": "test Vue project",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
      //配置 build 使得命令行可以直接使用 npm run build 打包，否则需要使用 webpack --config webpack.config.js命令
    "build": "webpack --config webpack.config.js"
  },
  "author": "Jayce",
  "license": "ISC",
  "dependencies": {
    "vue": "^2.6.14",
    "vue-loader": "^15.7.0",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.43.0",
    "webpack-cli": "^4.7.2"
  }
}
```

- 新建一个 *webpack.config.js* ，并引入 vue-loader 

```js
const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    //指定入口文件
    entry: path.join(__dirname, "app.js"),
    //指定输出文件的位置和名称
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
    },
    plugins: [
        //在使用新版的vue-loader时，必须引入该插件
        new VueLoaderPlugin()
    ],
    module: {
        //指定不同格式的规则
        rules: [
            //解析 .vue 文件
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    }
}
```

- 配置 *app.js* 将文件挂载到 root 根节点之中

```js
//引入vue
import Vue from "vue"
import HelloWorld from "./HelloWorld.vue"

const root = document.createElement("div")
document.body.appendChild(root)

//mount 将 HelloWorld 模块挂载到 root 根节点中
new Vue({
    render: (h) => h(HelloWorld)
}).$mount(root)
```

##### 最后的项目目录

- testVue
  - node_modules【依赖文件夹】
  - *app.js* 
  - *HelloWorld.vue* 
  - *package.json* 
  - *package-lock.json* 
  - *webpack.config.js* 

