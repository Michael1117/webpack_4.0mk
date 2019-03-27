const webpack = require('webpack');
const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', 
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
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
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',  
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
    }
}

module.exports = devConfig