


var webpack = require('webpack');

var path = require('path')

// var nodeModules = path.join(__dirname,"node_moodules");
//
// var distPath = path.join(__dirname,'dist');
// 入口文件
// var entries = {
//     'basic' : './src/basic.js',
//     'canvas': './canvas/canvasProject.js',
//     'hot-module':'webpack/hot/dev-server',
//     'hot-module-2':'webpack-dev-server/client?http://0.0.0.0:9888'
// }
var entries = [
    './src/basic.js',
    './canvas/canvasProject.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://0.0.0.0:9888'
]


module.exports = { //暴露 的接口
    entry : entries,
    output : {//输出配置
        filename : '[name].bundle.js',
        // path : path.join(__dirname,'/dist')
    },
    module:{//加载器配置
        loaders : [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    },
    // resolve : {
    //     // root :   //absolute path
    //     extension:['','.js','json','.scss'],//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    //     alias : {//别名
    //         'three' : path.join(nodeModules,'/three/build/three'),
    //         // 'three' : path.join(nodeModules,'/three/build/three.min'),
    //     }
    // },
    // //这句等于在开头 加了一句 var libs = new webpack.optimize.CommonsChunkPlugin('libs.js');
    // //提取多个入口文件的公共脚本部分，然后生成一个 lib.js 来方便多页面之间进行复用。
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     // 把three打包成一个Libs文件
        //     name:'libs',
        //     filename:'libs.js',
        //     minChunks: Infinity
        // })
        new webpack.HotModuleReplacementPlugin()
    ]
};


