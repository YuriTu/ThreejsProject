/**
 * @file Describe the file
 * @author tuqiang
 */

const webpack = require("webpack");
const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");

const entries = {
    "basic"         : "./src/main.js",
    // "canvas"        : "./canvas/canvasProject.js",
    // "rotate"      : "./canvas/rotate/rotate.js",
    // 'particle'     : "./canvas/particle/particle.js",
    "webGL"         : "./webGL/webGL.js",
    "cube"         : "./cube/index.js",
    "sketch"         : "./sketchRendering/index.js",
    // "svg"         : "./svg/index.js",
    // "threejs"       : "./threeProject/3dLine/main",
    // "line"          : "./canvas/lightline/app",
    // 'line-all':'./canvas/lightline/app-all',
    // 'threedemo':'./threeProject/demo/main',
    // 'mmd':'./threeProject/MMD/index',

};
module.exports = {
    entry  : entries,
    output : {
        filename   : "[name].bundle.js",
        path       : path.resolve(__dirname, "js/"),
        publicPath : "http://0.0.0.0:9777/js/"
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
                        presets: ['babel-preset-env'],
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
        new webpack.ProvidePlugin({
            THREE: 'three',
            TWEEN: '@tweenjs/tween.js',
            Stats: 'stats.js'
        })
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
        port:9777,
        host:'0.0.0.0',
        proxy  : {
            "/api/*": {
                target       : "http://develop.com",
                changeOrigin : true,
                pathRewrite  : {
                    "^/api": ""
                }
            }
        },
        disableHostCheck:true,
        // headers: {
        //     "Access-Control-Allow-Origin"  : "*",
        //     "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        //     "Access-Control-Allow-Headers" : "X-Requested-With, content-type, Authorization"
        // }
    }

};



