define(function (){
	//根据amd规范定义了一个模块，该模块封装了一个函数实现字符串截取功能。
		var fnsubstr=function(msg,msglen)
		{
			return msg.substring(msglen);
		}
　　　　return {
			fnsubstr:fnsubstr
　　　　};
});