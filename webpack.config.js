const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");

module.exports = env => {
    const PROD = "production";
    const isProd = env === PROD;

    return {
        mode: env || "production",
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "app.bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    options: {
                        plugins: isProd ? [] : ["react-hot-loader/babel"]
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: "style-loader" },
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: "[local]--[hash:base64:5]"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.html",
                filename: "index.html",
                inject: "body"
            }),
            env === "production" &&
                new OptimizeJsPlugin({
                    sourceMap: false
                })
        ].filter(Boolean)
    };
};
