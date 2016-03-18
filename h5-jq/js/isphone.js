//jQuery动态加载js、css文件，使用方法如下：
//1、$.include('file/ajaxa.js');$.include('file/ajaxa.css'); 
//2、$.includePath = 'file/';$.include(['ajaxa.js','ajaxa.css']);(.js .css在同一目录下) 
$.extend({ 
	includePath: '', 
	include: function(file) 
	{ 
		var files = typeof file == "string" ? [file] : file; 
		for (var i = 0; i < files.length; i++) 
		{ 
			var name = files[i].replace(/^\s|\s$/g, ""); 
			var att = name.split('.'); 
			var ext = att[att.length - 1].toLowerCase(); 
			var isCSS = ext == "css"; 
			var tag = isCSS ? "link" : "script"; 
			var attr = isCSS ? " type='text/css' rel='stylesheet' " : " type='text/javascript' "; 
			var link = (isCSS ? "href" : "src") + "='" + $.includePath + name + "'"; 
			if ($(tag + "[" + link + "]").length == 0) $("head").append("<" + tag + attr + link + "></" + tag + ">"); 
		} 
	} 
}); 
// 判断是否为手机端访问，是则进行相应处理
var system = { 
	win: false, 
	mac: false, 
	xll: false, 
	ipad:false 
}; 
//检测平台 
var p = navigator.platform; 
system.win = p.indexOf("Win") == 0; 
system.mac = p.indexOf("Mac") == 0; 
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false; 

//ADD CODE 判断是否是微信端浏览（微信端user agent含有micromessenger）
//参见https://dearb.me/archive/2013-10-30/weixin-browser-user-agent/
var isWeChat = (navigator.userAgent.match(/micromessenger/i) != null)?true:false;

//跳转语句，如果是手机访问就加载手机端样式或者自动跳转到wap页面 
if (isWeChat || !(system.win || system.mac || system.xll||system.ipad)){ 
	//window.location.href="http://wap.xxxx.com";
	$.include('css/phone.css');
	var isphone = true;
}