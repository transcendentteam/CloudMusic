let express = require('express');
let path = require('path');
let app = express();

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 启用 代理，实现跨域请求
var proxy = require('http-proxy-middleware');
app.use('/ajax', proxy({
    target: "http://120.27.243.6:3000/", 
    changeOrigin: true
}));

app.listen(8080,function(){
    console.log('server start@localhost:3000')
})


