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