# Vue.js 2.x

## 开发前奏

### *Promises* 介绍

> 用于解决方法回调的问题

它有如下名称约定：

- *promise* 首字母小写，指的是 *Promise* 实例对象
- *Promise* 首字母大写单数形式，表示 *Promise* 的构造函数
- *Promises* 首字母大写复数形式，用于指代 *Promises* 规范

#### *console.log()* 与 *console.dir()* 的区别

- log 可以取代 alert() 或 document.write() ，在网页脚本使用时，控制台会打印信息
- dir 可以显示一个对象所有的属性和方法



输入如下字段，我们可以看到控制台打印了许多方法，而我们需要注意的是 *resolve()* 和 *reject ()* ，resolve 表示成功的回调函数，reject 表示失败后的回调函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>promises</title>
</head>
<body>
<script type="text/javascript">
    console.dir(Promise); // 可以看到具体的属性与方法
</script>
</body>
</html>
```



使用 function 指定一个具体的异步操作

```js
// 这是一个具体的异步操作，使用 function 指定一个具体的异步操作
var promise = new Promise(function () {
    // 这里写具体的异步操作
});
```



#### 解决回调问题

##### 不补货异常的情况

```js
const fs = require("fs");
const path = require("path");

function getFileByPath (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(data)
        })
    })
}

getFileByPath("./text.txt")
    .then(function (data) {
        console.log(data);
        return getFileByPath("./text1.txt") // 没有这个文件
    }, function (err) {
        console.log("读取失败：", err.message);
        return getFileByPath("./text1.txt")
    })
    .then(function (data) {
        console.log(data);
        return getFileByPath("./text2.txt")
    }, function (err) {
        console.log("读取失败：", err.message); // 进入到该方法
        return getFileByPath("./text2.txt")
    })
    .then(function (data) {
        console.log(data);
    }, function (err) {
        console.log("读取失败：", err.message);
    });
```



##### 捕获异常

其实当程序出现报错时，也就没有继续执行的必要了，因此可以使用 *catch()* 捕获异常

```js
getFileByPath('./text.txt')
    .then(function (data) {
        console.log(data)
        return getFileByPath("./text.txt")
    })
    .then(function (data) {
        console.log(data)
        return getFileByPath("./text2.txt")
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        console.log("读取失败：", err.message)
    })
```



### ES7语法糖 *async*/*awiat* 

#### *async* 

> async 用于声明一个函数是异步的



#### *awiat*

> 用于等待异步完成



改造上面的方法的一个总体思路：

- async 异步加载 Promise
- await 得到 Promise 对象后等待它的 resolve（成功值）或 reject （失败值）
- 异步的操作都返回 Promise 
- await 总是顺序执行的

```js
const fs = require("fs");

function getFileByPath (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(data)
        })
    })
}

async function getAllFile() {
    await getFileByPath("./text.txt").then(function (data) {
        console.log(data)
    });
    await getFileByPath("./text2.txt").then(function (data) {
        console.log(data)
    });
    await getFileByPath("./text3.txt").then(function (data) {
        console.log(data)
    })
}

getAllFile();
```

