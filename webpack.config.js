const path = require('path')

module.exports = {
    mode: 'development',
    entry:{
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[{
            test: /\.jpg$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'  // 名字不变
                }
            }
        }]
    }
}