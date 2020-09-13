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
		var index=$(this).parent().find("li").index(this);
		$(this).parent().parent().parent().find(".item").hide().eq(index).stop(true,true).fadeIn();
		//var index=$(".productlist>.title>ul>li").index(this);
		//$(".productlist>.content>.item").hide().eq(index).show();
	});
	
	//推广商品页签效果
	$("#recommproduct .title ul>li").mouseenter(function(){
		if(!$(this).hasClass("current"))
		{
			$(this).addClass("current").siblings().removeClass("current");
			var index=$("#recommproduct .title ul>li").index(this);
			$(".recommproductlist").hide().eq(index).stop(true,true).fadeIn();
		}		
	});
	
	//首页大轮播效果
	$("#ppt01").tyslide({
			boxh:430,//盒子的高度
			w:1000,//盒子的宽度
			h:390,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:60,//控制按钮宽度
			controlsH:10,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"red",//普通控制按钮的颜色
			controlsCurrentColor:"green"//当前控制按钮的颜色
	});
	
	//图书电子书轮播
	$(".ppt02").tyslide({
			boxh:216,//盒子的高度
			w:330,//盒子的宽度
			h:216,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:60,//控制按钮宽度
			controlsH:8,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"red",//普通控制按钮的颜色
			controlsCurrentColor:"green"//当前控制按钮的颜色
	});
	
	//图书电子书第三个页签的特殊轮播
	$("#pptts").tyslide({
			boxh:216,//盒子的高度
			w:330,//盒子的宽度
			h:216,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:60,//控制按钮宽度
			controlsH:8,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"blue",//普通控制按钮的颜色
			controlsCurrentColor:"green"//当前控制按钮的颜色
	});
	
	//服装
	$(".ppt03").tyslide({
			boxh:336,//盒子的高度
			w:422,//盒子的宽度
			h:336,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:60,//控制按钮宽度
			controlsH:8,//控制按钮高度
			radius:0,//控制按钮圆角度数
			controlsColor:"red",//普通控制按钮的颜色
			controlsCurrentColor:"green"//当前控制按钮的颜色
	});
	
	
	//搜索框的提示效果  
	/*
	 具体逻辑：
	 1、搜索框初始化的时候有默认的文字提示 。
	 2、鼠标点击搜索框，搜索框获得焦点，判断文本框里面文字内容是否为默认的提示文字，如果是，则删除，否是就不做任何操作，光标在文字后面闪烁。
     3、鼠标移动开搜索框，失去焦点，判断文本框是否为空，如果为空，则显示默认的提示文字。
	 */
	
	$("input[name='searchinput']").focus(function(){
		 if($(this).val()==$(this).attr("data-title"))
		 {
		 	$(this).val("");
		 	$(this).css({"color":"#000"});
		 }
	}).blur(function(){//trim函数就是把字符串中的空格去掉
		if(!($(this).val().trim().length>0))
		{
			$(this).val($(this).attr("data-title"));
			$(this).css({"color":"#ccc"});
		}
	});
	
	setFixedWrapper();
	showGotoTop();
	
	//搜索框固定在顶部效果
	$(window).scroll(function(){
		setFixedWrapper();
		showGotoTop();
	});
	
	function setFixedWrapper()
	{
		if($(document).scrollTop()>100)
		{
			$("#fixedwrapper").addClass("on");
		}
		else
		{
			$("#fixedwrapper").removeClass("on");
		}
	}
	
	
	function showGotoTop()
	{
		if($(document).scrollTop()>1000)
		{
			$("#btngototop").fadeIn();
		}
		else
		{
			$("#btngototop").fadeOut();
		}
	}
	
	//滚动到顶部的效果
	$("#btngototop").click(function(){
		$("html,body").animate({
			 scrollTop:0
		},500)
	});
	
	
	//电梯效果
	$("#floors>li").mouseenter(function(){
		var txt=$(this).attr("data-text");
		var bgcolor=$(this).attr("data-color");
		$(this).find("span").text(txt).show();
		$(this).css({"background-color":bgcolor});
		$(this).stop(true,true).animate({"width":"80px"},500);
	});
	
	$("#floors>li").mouseleave(function(){
		$(this).find("span").hide();
		$(this).css({"background-color":"transparent"});
		$(this).stop(true,true).animate({"width":"40px"},500);
	});
	
	
	$("#floors>li").click(function(){
		var id=$(this).attr("data-id");
		var topval=$("#"+id).offset().top;
		$("html,body").animate({
			scrollTop:(topval-280)
		});
		
	});
	
	//二维码效果
	$("#twocode>li.middle").mouseenter(function(){
		$("#codeimg").stop(true,true).fadeIn();
	}).mouseleave(function(){
		$("#codeimg").stop(true,true).fadeOut();
	});
	
	
	

});
