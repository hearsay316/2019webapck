const path = require("path");
module.exports = {
    //因为开发的配置和生产的环境下的webpack 配置有不一样的地方
    mode:"development", // production
    devtool:"eval",
    entry:"./src/index.js", //入口文件
    output: {
        path: path.join(__dirname,"dist") ,// 这个是打包以后的文件,必须是绝对目录
        filename:"bundle.js"
    }
};