//  导入node中的path模块来处理路径
const path = require('path')
// __dirname表示当前文件的存放路径
// 动态生成cover.less的绝对路径 ======== node知识点
const coverPath = path.join(__dirname, './src/cover.less')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${coverPath}";`
        }
      }
    }
  }
}
