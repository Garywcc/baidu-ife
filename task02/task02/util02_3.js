// window.onload=function(){


// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    element.setAttribute("class","newClassName");
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    var classname=element.getAttribute("class");
    if(classname="oldClassName"){
    	element.setAttribute("class","");
    }

}
// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    if(element.parentNode==siblingNode.parentNode){
    	return true;
    }
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
/*function getPosition(element) {
    // your implement
    var position={};
    var position.X=element.pageX;
    var	podition.Y=element.PageY;
    if(pageX===undefiend){	
    position.X=element.clientX+(document.body.scrollLeft || document.documentElement.scrollLeft);}
    if(pageY===undefiend){	
    position.Y=element.clientY+(document.body.scrollTop || document.documentElement.scrollTop);}

}*/
// your implement



        function getElementsByClassName(classname){
            if(document.getElementsByClassName){
                var sd=document.getElementsByClassName(classname);
                console.log(sd)
            }else{
                var result=new Array();
                var eles=document.getElementsByTagName("*");
                for(i=0,len=eles.length;i<len;i++){
                    if(eles[i].className.indexOf(classname)!=-1){
                        result[result.length]=eles[i];
                    }
                }
                return result;
            }
        }




// 实现一个简单的Query
        function $(selector) {

        	 var element;
        	 var dis=selector.slice(0,1);
             var ds=selector.slice(1);
         
             if(dis=="."){
                     element=document.getElementsByClassName(ds)[0];
             }else if(dis=="#" && (selector.indexOf(".")==-1) && (ds.indexOf("#")==-1) ){
               
                element=document.getElementById(ds);
             }else if(dis.match(/^[A-Za-z]/)){
                element=document.getElementsByTagName(selector)[0];
             }else if(selector.match(/^[#|.][A-Za-z0-9]+\s[#|.][A-Za-z0-9]+/)){

                if(dis="#" && selector.indexOf(".") !=-1){
                    var first=selector.slice(0,selector.indexOf(".")-1);
                        var second=selector.slice(selector.indexOf("."));
                        var ifirst=first.slice(1)
                        var isecond=second.slice(1)
                        var parent=document.getElementById(ifirst);
                        for(key in parent.childNodes){
                            if(parent.childNodes[key].className==isecond){
                                element=document.getElementsByClassName(parent.childNodes[key].className)[0];
                            }
                        }
                }else if(dis="#" && (selector.lastIndexOf("#") !=selector.indexOf("#"))){
                
                var first=selector.slice(0,selector.lastIndexOf("#")-1);
                var second=selector.slice(selector.lastIndexOf("#"));
                var ifirst=first.slice(1);
                var isecond=second.slice(1);
                var parent=document.getElementById(ifirst);
                for(key in parent.childNodes){
                    if(parent.childNodes[key].id==isecond){
                        element=document.getElementById(parent.childNodes[key].id);

                    }
                }
            }
            }else if(dis="["){
                var all=document.getElementsByTagName("*");
                var sli=selector.slice(1,-1)
                if(selector.indexOf("=")===-1){
                    for(i=0,len=all.length;i<len;i++){
                        if(all[i].getAttribute(sli)!==null){
                            element=all[i].getAttribute(sli);
                        }
                    }
                }else{
                    var pos=selector.indexOf("=");
                    var nam=selector.slice(1,pos);
                    var attr=selector.slice(pos,-1);
                    for(i=0,len=all.length;i<len;i++){
                        if(all[i].getAttribute(nam)==attr){
                            element=all[i].getAttribute(nam);
                        }
                    }



                }
            }else{
                console.log(15)
            }
        return element;
        }
//增加事件处理
function addEvent(element, event, listener) {
    if(element.addEventListener){
        element.addEventListener(event,listener,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+event,listener);
    }else{
        element["on"+event]=listener;
    }
}
/*function clicklistener(event) {
    alert("hello world")
}
 addEvent($("#clss1"), "click", clicklistener);*/


// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if(element.removeEventListener){
        element.removeEventListener(event,listener,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+event,listener);
    }else{
        element["on"+event]=null;
    }
}

/*removeEvent($("#clss1"), "click", clicklistener);*/


// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element,"keypress",function(event){
        if(event.keyCode==13){
            listener();
        }
    });
}

$.on = function (element, type, listener) {
    return addEvent(element, type, listener);
};
$.un = function (element, type, listener) {
    return removeEvent(element, type, listener);
};
$.click = function (element, listener) {
    return addClickEvent(element, listener);
}
$.enter = function (element, listener) {
    return addEnterEvent(element, listener);
};
//事件代理
function delegateEvent(element, tag, eventName, listener) {
   return addEvent(element,eventName,function(event){
        var event=event || window.event;
        var target=event.target || event.srcElement;
        if(target.tagName.toLowerCase()===td){          //tagName 属性返回元素的标签名。在 HTML 中，tagName 属性的返回值始终是大写的。
            listener(target,event);
        }
   });
}
$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
// $.delegate($("#list"), "li", "click", clickHandle);



/*$.on(selector,event,listener){
    return addEvent($(selector),event,listener);
};

$.click(selector,listener){
    return addEvent($(selector),"click",listener);
};

$.un(selector,event,listener){
    return addEvent($(selector),event,listener);
};

$.delegate(selector,tag,event,listener){
    return delegateEvent($(selector),tag,event,listener);
};*/

// 使用示例：
/*$.click("[data-log]", logListener);
$.delegate('#list', "li", "click", liClicker);*/















// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
        
        if (!!window.ActiveXObject || "ActiveXObject" in window)  
            alert("true");  
        else  
            alert("false");  
    
}
// isIE();

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    document.cookie=encodeURIComponent("cookieName")+"="+encodeURIComponent("cookieValue")+";expires=expiredays;";
    
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
    var cookiename=encodeURIComponent(cookieName)+"=",
    cookiestar=document.cookie.indexOf(cookiename),
    cookievalue=null;
    if(cookiestar!=-1){
        cookieend=document.cookie.indexOf(";",cookiestar);
        if(cookieend==-1){
            cookieend=document.cookie.length;
        }
        cookievalue=decodeURIComponent(document.cookie.substring(cookiestar+cookiename.length,cookieend));
    }
    return cookievalue;

}


function uniqArray(arr){
    
    var newarr=arr;//数据副本
    var count=newarr.length;
    for(i=0;i<count;i++){
        

        if(typeof(arr[i])=="number" || typeof(arr[i])=="string"){
            //前后对比
            if(newarr.indexOf(arr[i])!=newarr.lastIndexOf(arr[i])){
                newarr.splice(newarr.lastIndexOf(arr[i]),1);
                uniqArray(newarr);

            }else{
                continue;
            }
            
    continue;
        }
        
    }
    return newarr;
}










// }