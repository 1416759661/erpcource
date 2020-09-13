define(['jquery'],function ($){
　　　　var show = function (c){
			$("#aa").text(c);
　　　　　　console.log(c);
　　　　};
　　　　return {
　　　　　　show: show
　　　　};
});