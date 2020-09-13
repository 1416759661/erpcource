define(function (){
　　　　var add = function (x,y){
　　　　　　return x+y;
　　　　};
		var addstr=function(x,y,z)
		{
			return "字符串相加结果:"+x+y+z;
		};

　　　　return {
			add: add,
			addstr:addstr
　　　　};
});