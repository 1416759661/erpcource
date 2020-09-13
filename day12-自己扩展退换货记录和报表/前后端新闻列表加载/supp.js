var http = require('http');

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	//response.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
	var str={
		"items":[
			{
				"id":"1",
				"title":"司机不会下岗，真正实现无人驾驶还早着呢",
				"time":"2017-9-11 16:10:00"
			},
			{
				"id":"2",
				"title":"80后成购房主力军 房贷调控需因人施策",
				"time":"2017-9-11 16:10:00"
			},
			{
				"id":"3",
				"title":"这么冷的天，不在家吃火锅，出来烧单车，真是闲得慌",
				"time":"2017-9-11 16:10:00"
			},
			{
				"id":"4",
				"title":"库克在上海约王兴吃馄饨 建议美团把业务带到美国",
				"time":"2017-9-11 16:10:00"
			}
			,
			{
				"id":"5",
				"title":"如今双11里90%交易来自手机",
				"time":"2017-9-11 16:10:00"
			}
			,
			{
				"id":"2",
				"title":"80后成购房主力军 房贷调控需因人施策",
				"time":"2017-9-11 16:10:00"
			},
			{
				"id":"3",
				"title":"这么冷的天，不在家吃火锅，出来烧单车，真是闲得慌",
				"time":"2017-9-11 16:10:00"
			},
			{
				"id":"4",
				"title":"库克在上海约王兴吃馄饨 建议美团把业务带到美国",
				"time":"2017-9-11 16:10:00"
			}
			,
			{
				"id":"5",
				"title":"如今双11里90%交易来自手机",
				"time":"2017-9-11 16:10:00"
			}
		]
	};
	response.writeHead(200, {
		'Content-Type': 'text/json;charset=utf-8',
		'Access-Control-Allow-Origin':'*',
		'Access-Control-Allow-Methods':'PUT, GET, POST, DELETE, OPTIONS',
		'Access-Control-Allow-Headers':'X-Requested-With',
		'Access-Control-Allow-Headers':'Content-Type'
	});
	response.write(JSON.stringify(str));
	response.end();
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');