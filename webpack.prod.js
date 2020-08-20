const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
        /* babel loader */
        {
            test: /\.js$/,
            exclude: "/node_modules/",
            use: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
            ]
        }
        ]
    },
    plugins : [
    new HtmlWebpackPlugin({
        template: "./assets/template.html",
        filename: "index.html"
    })
    ]
})