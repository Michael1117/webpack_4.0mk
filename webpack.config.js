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
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    // placeholder 站位符
                    //name: '[name].[ext]'  // 名字不变
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/'
                }
            }
        }]
    }
}