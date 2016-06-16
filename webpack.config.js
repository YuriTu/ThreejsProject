var webpack = require('webpack');

var path = require('path')

var nodeModules = path.join(__dirname,"node_moodules");

var distPath = path.join(__dirname,'dist');
// 入口文件
var entries = {
    'libs' : './src/lib'

}

module.exports = {
    entry : entries,
    
}


