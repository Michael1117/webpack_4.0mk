const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry:{
        main: './src/index.js',
        main1: './src/index1.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,  
                loader: "babel-loader"
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
        usedExports: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, '../dist')
    },
}