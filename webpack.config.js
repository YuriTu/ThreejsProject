


const webpack = require("webpack");

const path = require("path");

const DashboardPlugin = require("webpack-dashboard/plugin");
// 入口文件
const entries = {
    "basic"         : "./src/basic.js",
    "canvas"        : "./canvas/canvasProject.js",
    "particle"      : "./particle/particle.js",
    "basicLib"      : "./particle/basicLib.js",
    "rotate"        : "./rotate/rotate.js",
    "webGL"         : "./webGL/webGL.js",
    "learningThree" : "./threeProject/learningThree",
};
// 暴露 的接口
module.exports = {
    entry  : entries,
    // 输出配置
    output : {
        filename: "./js/[name].bundle.js",
    },
    // 加载器配置
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js[x]?$/, loader: "babel-loader?presets[]=es2015" }
        ]
    },
    plugins: [
        new DashboardPlugin()
    ],
    devServer: {
        hot    : true,
        inline : true
    }
};


