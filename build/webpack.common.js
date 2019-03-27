const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:{
        main: './src/index.js',
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,  
                use: [{
                    loader: 'babel-loader'
                },{
                    loader: 'imports-loader?this=>window'
                }]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',  // 当发现某个文件中出现$ ,就自动引入jquery
            _join: ['lodash', 'join']
        })
    ],
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, 
                    priority: -10,
                    name: 'vendors'
                }
            }
        }
    },
    performance: false,
    output: {
        path: path.resolve(__dirname, '../dist')
    },
}