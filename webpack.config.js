const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    isProduction = process.env.NODE_ENV === "production";

const extractLess = new ExtractTextPlugin('css/[name].css');

module.exports = {
    context: __dirname,
    devtool: false,
    plugins: !isProduction ? [extractLess] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            sourcemap: false
        }),
        extractLess
    ],
    entry: {
        "olympiaTicker": [
            path.resolve(__dirname, "src/js/olympiaTicker.js"),
            path.resolve(__dirname, "src/css/olympiaTicker.less")
        ]
    },
    output: {
        path: path.resolve(__dirname, "public/assets/"),
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.(less|css)$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: isProduction
                        }
                    }, {
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"
                })
            },{
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&publicPath=../&name=./fonts/[hash].[ext]',
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000&publicPath=../&name=./img/generated/[hash].[ext]',
                    {
                        loader: 'img-loader?publicPath=../&name=./img/generated/[hash].[ext]',
                        options: {
                            enabled: isProduction,
                            gifsicle: {
                                interlaced: false
                            },
                            mozjpeg: {
                                progressive: true,
                                arithmetic: false
                            },
                            optipng: false,
                            pngquant: {
                                floyd: 0.5,
                                speed: 2
                            },
                            svgo: {
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    }
};

