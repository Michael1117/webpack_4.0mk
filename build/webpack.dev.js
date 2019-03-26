const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js')

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', 
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true
    }
}

module.exports = merge(commonConfig, devConfig)