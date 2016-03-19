// 判断是否为手机端或微信访问，进行跳转处理
var relocate = false;
var p = navigator.platform;
var system = {win: false, mac: false, xll: false, ipad:false };  
system.win = p.indexOf("Win") == 0; 
system.mac = p.indexOf("Mac") == 0; 
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0); 
system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false; 
//ADD CODE 判断是否是微信端浏览（微信端user agent含有micromessenger）
//参见https://dearb.me/archive/2013-10-30/weixin-browser-user-agent/
var isWeChat = (navigator.userAgent.match(/micromessenger/i) != null)?true:false;
//跳转语句，如果是手机访问就加载手机端样式或者自动跳转到wap页面 
if (isWeChat || !(system.win || system.mac || system.xll||system.ipad)){ 
	// window.location.href="html5.html";
	relocate = true;
}