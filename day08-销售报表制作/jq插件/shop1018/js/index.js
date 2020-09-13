$(function(){
	//左侧导航菜单
	$(".leftmenu>li").mouseenter(function(){
		$(this).addClass("current").siblings().removeClass("current");		
	});
	
	$(".leftmenu>li").mouseleave(function(){
		$(this).removeClass("current");		
	});
	
	
	//图书电子书页签效果
	$(".ebookleft .title ul>li").mouseenter(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index=$(".ebookleft ul>li").index(this);
		$("#ebook .content>div.item").hide().eq(index).show();		
	});
	
	
	//新书畅销榜效果
	$(".ebookright>ul>li").mouseenter(function(){
		$(this).addClass("current").siblings().removeClass("current");
	});
	
	
	//服装页签切换效果
	$(".productlist>.title>ul>li").mouseenter(function(){
		$(this).addClass("current").siblings().removeClass("current");
		//var index=$(".productlist>.title>ul>li").index(this);
		//$(".productlist>.content>.item").hide().eq(index).show();
		
		var index=$(this).parent().find("li").index(this);		
		$(this).parent().parent().parent().find(".item").hide().eq(index).stop(true,true).fadeIn();
		
	});
	
	//轮播效果
	//首页大轮播  ppt01
	var opts={
				boxh:428,//盒子的高度
				w:1000,//盒子的宽度
				h:390,//图片的高度
				isShow:true,//是否显示控制器
				isShowBtn:true,//是否显示左右按钮
				controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
				controlsW:20,//控制按钮宽度
				controlsH:20,//控制按钮高度
				radius:10,//控制按钮圆角度数
				controlsColor:"#d8d8d8",//普通控制按钮的颜色
				controlsCurrentColor:"#ff6600"//当前控制按钮的颜色
	};
	$("#ppt01").tyslide(opts);
	
	
	$(".pptrecomm").tyslide({
		boxh:216,//盒子的高度
		w:330,//盒子的宽度
		h:216,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:50,//控制按钮宽度
		controlsH:8,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ff6600"//当前控制按钮的颜色
	});
	
	
	$(".pptclothse").tyslide({
		boxh:336,//盒子的高度
		w:422,//盒子的宽度
		h:336,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:50,//控制按钮宽度
		controlsH:8,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#d8d8d8",//普通控制按钮的颜色
		controlsCurrentColor:"#ff6600"//当前控制按钮的颜色
	});


});
