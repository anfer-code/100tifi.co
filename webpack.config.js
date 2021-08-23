const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js"],
        alias: {
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@styles': path.resolve(__dirname, 'src/styles/')
        }

    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/i,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./public/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "styles/style.css"),
                    to: "styles/style.css"
                }
            ]
        })
    ]
}