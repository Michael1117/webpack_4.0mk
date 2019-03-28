const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js')

const commonConfig = {
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
        new CleanWebpackPlugin()
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

module.exports = (env) => {
    if(env && env.production === 'abc') {  // 线上环境
        return merge(commonConfig, prodConfig)
    }else{ // 开发环境
        return merge(commonConfig, devConfig)
    }
}