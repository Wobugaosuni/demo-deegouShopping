//原生JS实现
function getByClass(clsName,parentId){
	var oparent=parentId?document.getElementById(parentId):document;
	var eles=[];
	var elements=oparent.getElementsByTagName("*");
	for(var i=0;i<elements.length;i++){
		if(elements[i].className==clsName){
			eles.push(elements[i]);
		}
	}
	return eles;
}
window.onload=function(){
	//对滚动事件进行监听
	window.onscroll=function(){
		//浏览器兼容
		var top=document.documentElement.scrollTop||document.body.scrollTop;
		var items=getByClass("item","content");
		var menuAs=document.getElementById("menu").getElementsByTagName("a");
		var currentId="";
		for(var i=0;i<items.length;i++){
			var itemTop=items[i].offsetTop-300;
			if(top>itemTop){
				currentId="#"+items[i].id;
				//console.log(currentId);
			}else{
				break;
			}
		}
		//console.log(currentId);
		for(var j=0;j<menuAs.length;j++){
			menuAs[j].className="";
			var href=menuAs[j].getAttribute("href");
			if(currentId==href){
				menuAs[j].setAttribute("class","current");
			}
		}
	}
}
	






//jQuery实现
// $(document).ready(function(){
// //对滚动条发生滚动的事件进行监听
// 	$(window).scroll(function(){
// 		var top=$(document).scrollTop();
// 		//console.log(top);
// 		var menu=$("#menu");
// 		var items=$("#content").find(".item");
// 		var currentId="";
// 		items.each(function(){
// //注意this的书写！而且赋值是个好习惯！
// 			var m=$(this);
// 			var itemTop=m.offset().top-300;
// 			if(top>itemTop){
// 				currentId="#"+m.attr("id");
// 			}else{
// 				return false;
// 			}
// 		});
// 		//console.log(currentId);
// 		var currentLink=menu.find(".current");
// 		if(currentId){
// 			currentLink.removeClass("current");
// 			//"+currentId"为变量拼接，单引号将变量转换为字符串
// 			menu.find("[href='"+currentId+"']").addClass("current");

// 		}
// 	});
// });