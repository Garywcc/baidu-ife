window.onload=function(){


	//事件处理程序
	var EventUtil={
				addHandler:function(element,type,handler){
					if(element.addEventListener){
						element.addEventListener(type,handler,false);
					}else if(element.attachEvent){
						element.attachEvent("on"+type,handler);
					}else{
						element["on"+type]=handler
					}
				},
				getEvent:function(event){
					return event ? event : window.event;
				},
				getTarget:function(event){
					return event.target || event.srcElement;

				},
				preventDefault:function(event){
					if(event.preventDefalut){
						event.preventDefalut();
					}else{
						event.returnValue=false;
					}
				},
				removeHandler:function(element,type,handler){
					if(element.removeEventListener){
						element.removeEventListener(type,handler,false);
					}else if(element.detachEvent){
						element.detachEvent("on"+type,handler);
					}else{
						element["on"+type]=null;
					}
				},
				stopPropagation:function(event){
					if(event.stopPropagation){
						event.stopPropagation();
					}else{
						event.cancelBubble=true;
					}
				},
				listener_input:function(element,listener){
					//考虑ie9以下使用addEventListener来判断

					if (element.addEventListener) {
            			element.addEventListener("input", listener, false);
        				} else if (element.attachEvent) {

            			element.attachEvent("onpropertychange", listener);
        			};
/*
					if(element.attachEvent ){
			            element.attachEvent("OnPropChanged", listener);
					 }else{
					//if(element.onpropertychange){
						
						//element.onpropertychange=listener;
					//}else{
						EventUtil.addHandler(element,"input",listener);
					}*/
				}
			};
//获取单击时的index	
function getIndex(element) {
    var aBrother = element.parentNode.children;
    
    for (var i = 0, len = aBrother.length; i < len; i++) {
        if (aBrother[i] == element) {
            return i;
        }
    }
}











//创建ajax对象
function createXHR(){
	if(typeof XMLHttpRequest!="undefiend"){
		return new XMLHttpRequest();
	}else if(typeof acticeXObject!="undefiend"){
		var verson=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
		i,len;
		for(i=0;i<verson.length;i++){
			try{
				return new ActiveXObject(verson[i]);
			}catch(e){
				//跳过
			}
		}
	}else{
		throw new Error("not available");
	}
}













//ajax方法
var ajax=function(obj){
	
	var xhr=createXHR();
	obj.url+="?rand="+Math.random();
	//obj.date=parame(obj.date);
	//if(obj.method==="get")obj.url+=obj.url.indexOf("?")==-1 ?"?"+obj.date : "&"+obj.date;
	if(obj.async===true){
	xhr.onreadystatechange=function(){

		if(xhr.readyState==4){
			if(xhr.status==200){
			obj.callback(xhr.responseText);
			}else{
			alert("not available"+xhr.status);
			}
		}
	
	}
	}
	xhr.open(obj.method,obj.url,obj.async);
	/*if(obj.method==="post"){
		xhr.setRequestHeader("Contont-type","application/x-www-form-urlencode");
		xhr.send(obj.date)
	}else{*/
	xhr.send(null);
	//}
	if(obj.async===false){
		if(xhr.readyState==4){
			if(xhr.status==200){
			obj.callback(xhr.responseText);
			}else{
			alert("not available"+xhr.status);
			}
		}
	}

}




















var textbox=document.getElementById("myText");


function listener(event){
			
	var value=EventUtil.getTarget(event).value;
			
	
	
	//var pattern=new RegExp("^"+value,"i");//匹配字符串用創建正則實例
	//var pattern=new RegExp(value,"i");

	if (value === "") {
            ul.style.display = "none";
        } else {
            ajax({
            	method:"get",
				url:"123.txt",
				async:false,
				callback:callbackFunction
            });
        }

//回调函数
function callbackFunction(date){
var newdate=eval(date)//使date变为数组类型
	var liElement="";
	var len=newdate.length;
	
	for(i=0;i<len;i++){
		//找出符合的字符
		var start=newdate[i].indexOf(value);
		if(start!=-1){
			var end=start+value.length;
			liElement+="<li>"+newdate[i].slice(0,start)+"<span>"+newdate[i].slice(start,end)+"</span>"+newdate[i].slice(end);
		}
		//只能找到开头满足条件
		//var match=newdate[i].match(pattern);
		
		/*if(match){
		liElement+="<li><span>"+match[0]+"</span>"+newdate[i].substring(match[0].length)+"</li>";
		}*/
	}
	ul.innerHTML=liElement;
	ul.style.display="block";//显示ul
}





}

//输入框绑定监听函数
EventUtil.listener_input(textbox,listener);
		
		






//鼠标事件
var ul=$(".list");
delegateEvent(ul,"li","mouseover",function(){
	removeClass(ul);
	
	addClass(this,"active");
})
delegateEvent(ul,"li","mouseout",function(){
	removeClass(ul);
})
delegateEvent(ul,"li","click",function(){
	textbox.value=this.innerHTML;
	ul.style.display="none";

})
//键盘事件

EventUtil.addHandler(textbox,"keydown",function(event){
var li=$("li");
var highlight=$(".active");
event=EventUtil.getEvent(event);
	//向下
	if(event.keyCode==40){
		if(highlight){

			var liIndex=getIndex(highlight);
			var nextElement=highlight.nextElementSibling;
			if(nextElement){
				removeClass(ul);
				addClass(nextElement,"active")
			}

		}else{
			addClass(li[0],"active")
		}
	}
	//向上
	if(event.keyCode==38){
		if(highlight){

			var liIndex=getIndex(highlight);
			var previousElement=highlight.previousElementSibling;
			if(previousElement){
				removeClass(ul);
				addClass(previousElement,"active")
			}

		}else{
			addClass(li[0],"active")
		}
	}
	//回車
	if(event.keyCode==13){
		if(highlight){
			var liIndex=getIndex(highlight);
			textbox.value=deleteTag(li[liIndex].innerHTML);
			ul.style.display="none";

		}
	}
	//去除span 标签
	function deleteTag(string){
		var reg=/<\/?span>/ig;
		return string.replace(reg,"");

	}





})





		




//移除class

function removeClass(element){
	if(element.children){
		var len=element.children.length;
		
		for(i=0;i<len;i++){
			element.children[i].className="";
		}
	}
}
//添加class
function addClass(element,classname){

	var ele=element.tagName.toLowerCase();
	
	if(ele){
		element.setAttribute("class",classname);
	}

}









}