const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: './app.js',//
    output: {
        filename: "build/build.js"
    },
    devServer: {
        inline: true,
        port: 8060
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:8060'})//自动打开浏览器
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        },{
            // 图片加载器
            test:/\.(png|jpg|gif|jpeg)$/,
            loader:'url-loader?limit=2048'
        }]
    }
};
