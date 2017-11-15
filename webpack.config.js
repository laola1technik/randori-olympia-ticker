const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    isProduction = process.env.NODE_ENV === "production";

const extractLess = new ExtractTextPlugin('../../assets/css/[name].css');

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
        "layout_37": [
            path.resolve(__dirname, "src/js/ticker.js"),
            path.resolve(__dirname, "src/less/ticker.less")
        ]
    },
    output: {
        path: path.resolve(__dirname, "public/assets/js/build/"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.less$/,
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
            }
        ]
    }
};

