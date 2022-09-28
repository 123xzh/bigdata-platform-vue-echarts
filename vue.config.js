
const webpack = require('webpack')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //关闭eslint校验
  // lintOnSave: false,
  // lintOnSave: false, // 关闭语法检查
  // devServer: {
  //   proxy: {
  //     ws: false,
  //   },
  // },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  },
  publicPath: '.',

  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  // 开启代理服务器（方式一）跨域
  // devServer: {
  //   proxy: 'http://chenjianccx.shop:7000',
  //   changeOrigin: true
  // },
  //  devServer: {
  //     proxy: 'http://www.liulongbin.top:3006'
  //   }, 
  //开启代理服务器（方式二）
  // devServer: {
  //   proxy: {
  //     // /atguigu请求前缀 /
  //     "/api": {
  //       target: 'http://localhost:8888',
  //       // ^/atguigu匹配所有^/atguigu 将其转换为后面的 '' 空字符串
  // 			pathRewrite:{"^/api":""},
  //       // ws: true, //用于支持websocket
  //       // secure: true,    //是否https接口
  //       changeOrigin: true //用于控制请求头中的host值
  //     },
      // '/demo': {
      //   target: 'http://www.liulongbin.top:3006',
  		// 	pathRewrite:{'^/demo2':''},
      //   ws: true, //用于支持websocket
      //   changeOrigin: true //用于控制请求头中的host值
      // }
  //   }
  // }
})
