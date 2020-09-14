//fs文件模块
var fs = require("fs");
//url模块，处理地址
var url = require("url");
//http模块提供http网络交互功能
var http = require("http");
//创建http服务器端，并传入回调函数，在浏览器发送请求到达执行。浏览器客户端每一次请求服务器都会执行一次传入的函数。
var server = http.createServer(function(req,res){
    //获取url中请求文件的地址
    var path = url.parse(req.url).pathname;
    // "/" 为首页
    if(path=="/"){
        fs.readFile("index.html",function(err,data){

            //HTTP响应网页内容
            res.write(data);
            res.end();
        });
    }
});
//监听网络端口
server.listen(3000);
