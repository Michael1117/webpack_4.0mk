const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry:{
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    // placeholder 站位符
                    //name: '[name].[ext]'  // 名字不变
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 2048 //如果图片的大小超过了2048字节，单独打包成一个图片，小于就转化成base64
                }
            }
        },
        {
            test: /\.(eot|ttf|svg|woff)$/,
            use: {
                loader: 'file-loader'
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }
    ]
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
    ]
}