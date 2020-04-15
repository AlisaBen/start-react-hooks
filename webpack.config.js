const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 访问内置插件

module.exports = {
    mode: 'production',
    entry: {
        'index':['./src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/[name]-[hash:8].js', // main-8位哈希值，指定生成的文件
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/, // 除去node_modules文件的检测
            include: path.resolve(__dirname, './src'), // 仅处理src下的js文件
            use: ['babel-loader'], // 使用babel-loader进行加载
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.less'], // 识别这几个文件
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 处理html模板文件，并放到build文件夹中去
        }),
        new webpack.LoaderOptionsPlugin({
            use: ['react-hooks'],
            options: {
                rules: {
                    "react-hooks/rules-of-hooks": "error",
                    "react-hooks/exhaustive-deps": "warn",
                }
            }
        })
        
    ],
}

