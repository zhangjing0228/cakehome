// let proxyObj = {};
// proxyObj['/api'] = {
//     target: 'http://192.168.3.29:9090',
//     ws: false,
//     changeOrigin: true,
//     pathRewrite: {
//         '^/api': ''
//     }
// }
// module.exports={
//     outputDir:'honey',
//     publicPath: '',
//     productionSourceMap: false,
//     devServer: {
//         host:"127.0.0.1",
//         port:8888,
//         proxy: proxyObj
//     },
//     // chainWebpack:config=>{
//     //   //删除编译后的独立js文件上的预获取操作
//     //   config.plugins.delete("prefetch")
//     // }
// }