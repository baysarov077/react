const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', 'css']
    },
    context: path.resolve(__dirname, 'src'),
    entry: './script.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    plugins: [
       new HtmlWebpackPlugin({
            path: path.resolve(__dirname, 'src'),
            template: './index.html'
        })
        
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg?e|png?e|png)$/,
                use: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}