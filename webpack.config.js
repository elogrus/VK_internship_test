const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => ({
    entry: "./src/index.tsx",
    output: {
        filename: "[name]-[contenthash].bundle.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    devServer: {
        open: true,
        host: process.env.HOST || "localhost",
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            {
                test: /\.css$/i,
                use: [
                    argv.mode === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:
                                    argv.mode === "production"
                                        ? "[hash:base64:5]"
                                        : "[name]__[local]--[hash:base64:5]",
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    argv.mode === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:
                                    argv.mode === "production"
                                        ? "[hash:base64:5]"
                                        : "[name]__[local]--[hash:base64:5]",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.svg$/i,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        modules: [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, "./src/"),
        ],
    },
});
