
//副本去掉了78行的[0]

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
                return sd;
                
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

 function getElementsByClassName1(fareleme,classname){
            if(fareleme.getElementsByClassName){
                var sd=fareleme.getElementsByClassName(classname);
                return sd;
                
            }else{
                var result=new Array();
                var eles=fareleme.getElementsByTagName("*");

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

                     element=/*document.*/getElementsByClassName(ds);
             }else if(dis=="#" && (selector.indexOf(".")==-1) && (ds.indexOf("#")==-1) ){
               
                element=document.getElementById(ds);
             }else if(dis.match(/^[A-Za-z]/)){
                element=document.getElementsByTagName(selector);
                
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
function delegateEvent(fartherelem, childelem, type,listener) {
   return addEvent(fartherelem,type,function(event){
        var event=event || window.event;
        var target=event.target || event.srcElement;
        if(target.tagName.toLowerCase()===childelem){          //tagName 属性返回元素的标签名。在 HTML 中，tagName 属性的返回值始终是大写的。
            //listener(fartherelem,childelem);
            listener.call(target,event);
            //listener.call(target,fartherelem,childelem);
            // target.listener(fartherelem,childelem);
            
        }
   });
}
function delegateEvent1(fartherelem, selec, type,listener) {
   return addEvent(fartherelem,type,function(event){
        var event=event || window.event;
        var target=event.target || event.srcElement;
        if(target.id.toLowerCase()===selec){          //tagName 属性返回元素的标签名。在 HTML 中，tagName 属性的返回值始终是大写的。
            //listener(fartherelem,childelem);
            listener.call(target,event);
            //listener.call(target,fartherelem,childelem);
            // target.listener(fartherelem,childelem);
            
        }
   });
}

function delegateEvent2(fartherelem, selec, type,listener) {
   return addEvent(fartherelem,type,function(event){
        var event=event || window.event;
        var target=event.target || event.srcElement;
        if(target.className.toLowerCase().indexOf(selec)>-1){          //tagName 属性返回元素的标签名。在 HTML 中，tagName 属性的返回值始终是大写的。
            //listener(fartherelem,childelem);
            listener.call(target,event);
            //listener.call(target,fartherelem,childelem);
            // target.listener(fartherelem,childelem);
            
        }
   });
}

/*function delegateEvent(element, tag, eventName, listener) {
    // your implement
    return addEvent(element, eventName, function(ev) {
        var oEvent = ev || event; //兼容处理
        var target = oEvent.target || oEvent.srcElement; //兼容处理
        if (target.tagName.toLocaleLowerCase() === tag) {
            listener.call(target, oEvent); //使用call方法修改执行函数中的this指向，现在this指向触发了事件的HTML节点（可直接使用this.innerHTML返回该节点内容）
        }
    });
}*/





//$.delegate($(".dot"), "li", "click",listener)
//$.delegate = delegateEvent;
$.delegate = function (fartherelem, childelem, type, listener) {
    return delegateEvent(fartherelem, childelem, type, listener);
};
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


//函数 getStyle() 获取元素 CSS 样式
function getStyle(elem,styleName){
        if(elem.style[styleName]){//内联样式
            return elem.style[styleName];
        }
        else if(elem.currentStyle){//IE
            return elem.currentStyle[styleName];
        }
        else if(document.defaultView && document.defaultView.getComputedStyle){//DOM
            styleName = styleName.toLowerCase();
            var s = document.defaultView.getComputedStyle(elem,null);
            return s.getPropertyValue(styleName);
        }
        else{//other,for example, Safari
            return null;
        }
    }


function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}




// }