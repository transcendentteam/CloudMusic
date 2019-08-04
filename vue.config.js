module.exports = {
    devServer: {
      proxy: {
        '/ajax': {
          target: 'http://120.27.243.6:3000',
          changeOrigin: true  //代理服务器会在请求头中加入相应Host首部，然后目标服务器就可以根据这个首部来区别要访问的站点了
        },
      }   
    }
}