/**
 * @file Describe the file
 * @author 涂强（tuqiang01@baidu.com）
 */

const webpack = require("webpack");
const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");

const entries = {
    "basic"         : "./src/main.js",
    "canvas"        : "./canvas/canvasProject.js",
    "rotate"      : "./canvas/rotate/rotate.js",
    'particle'     : "./canvas/particle/particle.js",
    "webGL"         : "./webGL/webGL.js",
    "learningThree" : "./threeProject/learningThree",
    "line"          : "./canvas/lightline/app"

};
module.exports = {
    entry  : entries,
    output : {
        filename   : "[name].bundle.js",
        path       : path.resolve(__dirname, "dist/js/"),
        publicPath : "http://localhost:9888/dist/js/"
    },
    module: {
        noParse: /jquery/,
        rules: [
            {
                test   : /\.scss$/,
                use : ['style-loader','css-loader','sass-loader']
            },
            {
                test   : /\.css$/,
                use : ['style-loader','css-loader'],
            },
            {
                test   : /\.(png|jpg)$/,
                use : {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                    }
                }
            },
            {
                test    : /\.js[x]?$/,
                exclude : /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env','stage-0'],
                        plugins: ['transform-runtime']
                    }
                }
            },

        ]
    },
    devtool : "cheap-module-eval-source-map",
    plugins : [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        }),
        new DashboardPlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ],
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    externals: [
        'child_process',
        'aws-sdk'
    ],
    devServer: {
        hot    : true,
        inline : true,
        port:9001,
        proxy  : {
            "/api/*": {
                target       : "http://develop.com",
                changeOrigin : true,
                pathRewrite  : {
                    "^/api": ""
                }
            }
        },
        headers: {
            "Access-Control-Allow-Origin"  : "*",
            "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers" : "X-Requested-With, content-type, Authorization"
        }
    }

};



