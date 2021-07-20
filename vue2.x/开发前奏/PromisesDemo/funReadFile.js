// 将前面的读取文件方法单独封装
const fs = require('fs');
const path = require('path')

/**
 * 读取文件的方法
 * @param filePath 传入文件路径
 * @param successMsg 返回成功的方法
 * @param errMsg 返回失败的方法
 */
function getFileByPath (filePath, successMsg, errMsg) {
    fs.readFile(path.join(__dirname, filePath), "utf-8", (err, data) => {
        if (err)
            return errMsg(err)
        successMsg(data)
    })
}


// 调用
/*getFileByPath('./text.txt', function (data) {
    console.log(data);
}, function (err) {
    console.log("读取失败：", err.message);
});*/


// 连续读取多个文件（回调地狱）
getFileByPath('./text.txt', function (data) {
    console.log(data)
    getFileByPath('./text2.txt', function (data) {
        console.log(data)
        getFileByPath('./text3.txt', function (data) {
            console.log(data)
        })
    })
})
