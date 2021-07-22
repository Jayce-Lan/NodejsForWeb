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


// catch 捕获异常
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


// 异步加载
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