


var webpack = require('webpack');

var path = require('path');

var DashboardPlugin = require('webpack-dashboard/plugin');
// 入口文件
var entries = {
    'basic' : './src/basic.js',
    'canvas': './canvas/canvasProject.js',
    'particle':"./particle/particle.js",
    "basicLib":"./particle/basicLib.js",
    "rotate" : "./rotate/rotate.js"
}

module.exports = { //暴露 的接口
    entry : entries,
    output : {//输出配置
        filename : './js/[name].bundle.js',
    },
    module:{//加载器配置
        loaders : [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js[x]?$/,loader  : "babel-loader?presets[]=es2015"}
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


