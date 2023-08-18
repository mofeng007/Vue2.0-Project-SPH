const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 打包时不生成map映射文件
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false, /*关闭语法检查*/
 
  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // 重写
        // pathRewrite:{'^/api':''},
        // 用于支持websocket
        // ws: true,
        // // 用于控制请求头中的host值
        // changeOrigin: true
      },  
    }
  }
})
