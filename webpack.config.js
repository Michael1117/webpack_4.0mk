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
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        modules: true
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }
    ]
    }
}