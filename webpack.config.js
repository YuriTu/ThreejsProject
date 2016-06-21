/*
1. path 模块的作用 处理路径
2. path.join 做了什么 用于连接路径。可以对当前系统的路径用合适的分隔符，Unix系统是"/"，Windows系统是"\"。
3. webpack.optimize 的作用
4. CommonsChunkPlugin 的规格
 */


var webpack = require('webpack');

var path = require('path')

var nodeModules = path.join(__dirname,"node_moodules");

var distPath = path.join(__dirname,'dist');
// 入口文件
var entries = {
    'libs' : './src/lib',
    'index' : './src/index',
}

module.exports = { //暴露 的接口
    entry : entries,
    output : {//输出配置
        filename : '[name].bundle.js',
        path : path.join(__dirname,'/dist')
    },
    module:{//加载器配置
        loaders : [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    },
    resolve : {
        // root :   //absolute path
        extension:['','.js','json','.scss'],//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        alias : {//别名
            'three' : path.join(nodeModules,'/three/build/three'),
            // 'three' : path.join(nodeModules,'/three/build/three.min'),
        }
    },
    //这句等于在开头 加了一句 var libs = new webpack.optimize.CommonsChunkPlugin('libs.js');
    //提取多个入口文件的公共脚本部分，然后生成一个 lib.js 来方便多页面之间进行复用。
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            // 把three打包成一个Libs文件
            name:'libs',
            filename:'libs.js',
            minChunks: Infinity
        })
    ]
};


