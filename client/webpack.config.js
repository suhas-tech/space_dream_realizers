/* eslint-disable no-undef */
const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEV = process.env.WEBPACK_DEV_SERVER === "true";

module.exports = {
    entry: "./dev/index.js",

    output: {
        filename: DEV ? "[name].bundle.js" : "js/[name].[contenthash:10].js",
        publicPath: "/",
        path: path.join(__dirname, "build/"),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "initial",
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|gif|svg|mp3)/,

                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000, // convert images < 8kb to base64 strings
                            name: "images/[hash:8]-[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    devtool: DEV ? "cheap-module-eval-source-map" : false,
    mode: DEV ? "development" : "production",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@actions": path.resolve(__dirname, "src/actions"),
            "@reducers": path.resolve(__dirname, "src/reducers"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@apis": path.resolve(__dirname, "src/apis"),
            "@svg": path.resolve(__dirname, "src/svg"),
            "@theme": path.resolve(__dirname, "src/theme"),
            "@images": path.resolve(__dirname, "src/images"),
            "@ui": path.resolve(__dirname, "src/ui"),
        },
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        watchContentBase: true,
        historyApiFallback: true,
        disableHostCheck: true,
        port: 9000,
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new LoadablePlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: "dev/index.html",
                to: ".",
            },
            // {
            //     from: "src/assets",
            //     to: "assets",
            // },
        ]),
        !DEV &&
            new HtmlWebpackPlugin({
                templateContent: ({ htmlWebpackPlugin }) => `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Space and Space</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                    <link rel="apple-touch-icon" href="favicon.ico" />
                    <link rel="icon" href="favicon.ico" type="image/gif" sizes="16x16">
                    <style>
                      body {
                        background: #f1f3f6;
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                        overflow: auto;
                        font-family: Nunito, sans-serif !important;
                        color: #464646;
                        line-height: 1.5;
                        overflow: auto !important;
                      }
                    </style>
                    <style>
                      #lds-ring {
                        display: inline-block;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        width: 35px;
                        height: 35px;
                        transform: translate(-50%, -50%);
                      }
                
                      #lds-ring div {
                        box-sizing: border-box;
                        display: block;
                        position: absolute;
                        width: 35px;
                        height: 35px;
                        border: 2px solid #000;
                        border-radius: 50%;
                        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                        border-color: #000 transparent transparent transparent;
                      }
                
                      #lds-ring div:nth-child(1) {
                        animation-delay: -0.45s;
                      }
                
                      #lds-ring div:nth-child(2) {
                        animation-delay: -0.3s;
                      }
                
                      #lds-ring div:nth-child(3) {
                        animation-delay: -0.15s;
                      }
                
                      @keyframes lds-ring {
                        0% {
                          transform: rotate(0deg);
                        }
                        100% {
                          transform: rotate(360deg);
                        }
                      }
                    </style>
                    <base href="/" />
                    <link
                      href="https://fonts.googleapis.com/css?family=Nunito:400,700"
                      rel="stylesheet"
                    />
                    <!-- Global site tag (gtag.js) - Google Analytics -->
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-523LSQMCQF"></script>
                    <script>
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-523LSQMCQF');
                    </script>
                  </head>
                  <body>
                    <div id="lds-ring">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="root"></div>
                    <script>
                      window.onload = function () {
                        document.getElementById("lds-ring").style.display = "none";
                        document.getElementById("root").style.display = "block";
                      };
                    </script>
          
                  </body>
                </html>`,
            }),
        !DEV &&
            new CompressionPlugin({
                test: /\.js$/,
            }),
    ].filter(Boolean),
};
