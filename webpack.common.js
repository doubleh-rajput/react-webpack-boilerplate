const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use:[
                    {loader: "babel-loader"}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new webpack.ProvidePlugin({
            'React': 'react'
        })
    ],
    resolve: {
        extensions: [ '.js', '.jsx' ],
        alias: {
            components: path.resolve(__dirname, 'src/components/')
        },
    },

};
