module.exports = {
    entry: './src/index.js',
    output: {
        //配置打包文件名
        filename: './bundle.js',
    },
    mode: 'development',
    devServer: {
        publicPath: '/dist',
    }
}