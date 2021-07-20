const fs = require('fs');
const path = require('path');

// js普通读取文件的方式
fs.readFile(path.join(__dirname, './text.txt'), "utf-8", (err, data) => {
    if (err)
        throw err;
    console.log(data);
})
