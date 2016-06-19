// 只能实现简单的左右移动





window.onload=function(){
	var div1=$(".div1");
	var div2=$(".div2");


	var drag=null;
	var flag=false;
	


function delegateEvent1(fartherelem, childelem, type) {
		diffX=0;
		diffY=0;
		top1=0;
	   return addEvent(fartherelem,type,function(event){
		// alert(event==type)
		//alert(eve.type)
	        var event=event || window.event;
	        
	        var target=event.target || event.srcElement;
	        //top1=parseInt(getStyle(target,"top"));

	        if(target.tagName.toLowerCase()===childelem){          //tagName 属性返回元素的标签名。在 HTML 中，tagName 属性的返回值始终是大写的。
	            
	            //listener.call(target,event);
	            switch(type){
				case "mousedown":

					drag=target;
					if(parseInt(getStyle(drag,"left"))==100){
						flag=true;
					}
					
					
					diffX=event.clientX-target.offsetLeft;
					diffY=event.clientY-target.offsetTop;
					break;
				case "mousemove":
					if(drag!==null){	
						drag.style.left=(event.clientX-diffX)+"px";
						drag.style.top=(event.clientY-diffY)+"px";
						drag.style.opacity=0.5;
					}
					break;
				case "mouseup":
					drag.style.opacity=1;

					//main(drag.className)
					dragdiv(drag)
					drag=null;
					break;
			}
	            
	        }
	   });
	}


	

	delegateEvent1(div1, "span", "mousedown");
	delegateEvent1(div1, "span", "mousemove");
	delegateEvent1(div1, "span", "mouseup");

	delegateEvent1(div2, "span", "mousedown");
	delegateEvent1(div2, "span", "mousemove");
	delegateEvent1(div2, "span", "mouseup");




	//drag的div函数
	function dragdiv(eleme){
		var classname=eleme.className;
		var sps=eleme.parentNode.getElementsByTagName("span");
		var len=eleme.parentNode.getElementsByTagName("span").length;
		//获取span的背景颜色
		var arr=[];
		for(var i=0;i<len;i++){
			arr.push(getStyle(sps[i],"background-color"))
		}
		var pattern=/^d(\d)(\d)/i;
		if(pattern.test(classname)){
			var num2=RegExp.$2;
			var len1=len-num2;
			if(len1>0){
				if(flag==true){
					common(eleme,div2,div1,sps,num2,len1,arr,600);
					
				}else{
					common(eleme,div1,div2,sps,num2,len1,arr,100);
					
				}
					
				
		}else if(len1<0){
			if(flag==true){
				common(eleme,div2,div1,sps,num2,len1,arr,600);
				
			}else{
				common(eleme,div1,div2,sps,num2,len1,arr,100);
			}
		}else{
			if(flag==true){
				common(eleme,div2,div1,sps,num2,len1,arr,600);
				
			}else{
				common(eleme,div1,div2,sps,num2,len1,arr,100);
			}
		}

		var parent=eleme.parentNode;
		
	     }
	}





//common函数
function common(el,tcdi,di,sp,num,len1,arr,left){
	 if(touch(el,tcdi)){
		var len2=tcdi.children.length;
		var bcolor=getStyle(el,"background-color");
		//移除元素,添加新元素并设置属性
		var copy=el.cloneNode(el)
		di.removeChild(el);
		tcdi.appendChild(el);
		el.style.left=left+"px";
		el.style.top=50+80*len2+"px";
		el.style.backgroundColor=bcolor;
		//设置原div 各个span颜色
		for(var i=0;i<len1;i++){
			//var top1=50+80*i;
			var spscal=di.getElementsByTagName("span");
			//var lencal=div1.getElementsByTagName("span").length;
			spscal[num-1].style.backgroundColor=arr[num];
			num++;		
		}		
	}else{
		for(var i=0;i<len1;i++){
		sp[num-1].style.top=(50+80*(num-1))+"px";
		sp[num-1].style.left=100+"px";
		num++;
	}
}
}


	//接触函数
	function touch(moveEle,stableEle){
		var x=moveEle.offsetLeft;
		var a=parseInt(getStyle(moveEle,"width"))
		var wx=moveEle.offsetLeft+a;
		var y=moveEle.offsetTop;
		var b=parseInt(getStyle(moveEle,"height"))
		var wy=moveEle.offsetTop+b
		var x1=stableEle.offsetLeft;
		var a1=parseInt(getStyle(stableEle,"width"))
		var wx1=stableEle.offsetLeft+a1;
		var y1=stableEle.offsetTop;
		var b1=parseInt(getStyle(stableEle,"height"))
		var wy1=stableEle.offsetTop+b1;
		

		if(wx<x1 || wx1<x || y>wy1 || wy<y1){
			//alert("123")
			return false;
		}else{
			return true;
		}
	}

}








	