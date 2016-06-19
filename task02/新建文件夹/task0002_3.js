window.onload=function(){
	var box=$(".container"),
		img=$("img");
	var li=$("li");
	var imglen=img.length;
	var container_img=$(".container_img");
	container_img.style.width=(img[0].width)*imglen+"px";
	var container_img_width=parseInt(container_img.style.width);
		
	var dotul=$(".dot");
		//dotli=$("li");
	
	//var len=dotli.length;
	//动态添加dot
	function adddotli(){
		var dot_li_len=imglen;
		for(i=0;i<dot_li_len;i++){
		var li=document.createElement("li");
		dotul.appendChild(li);
		//默认第一个Li为选中状态
		dotul.children.item(0).setAttribute("class","active")
		
		}

	}
	adddotli();
	
	//自动播放
function autoPlay(){
		
		/*clearTimeout(auto_play);
		var i=0;

		var auto_play=setTimeout(function(){
			clearTimeout(auto_play);
			moveelement(container_img,i);

			i++;
			if(i===imglen){
				
				//setTimeout(autoPlay(),4000)
				//alert("122")
				//container_img.style.left=0+"px";
				clearTimeout(auto_play);
				
				autoPlay();
				
			}else{
				
				setTimeout(arguments.callee,2000)

			}

		},2000)*/
			/*var i=0;
			clearTimeout(auto_interval);
			var left=parseInt(getStyle(container_img,"left"));
			var auto_interval=setTimeout(function(){
				
				left-=20;
				container_img.style.left=left+"px";
				var auto_index=left%600;
				if(auto_index==0){
					setTimeout(arguments.callee,1000)
					i++;
					//console.log(i)
					if(i==(imglen-1)){
							container_img.style.left=0+"px";
							autoPlay();
							clearTimeout(auto_interval);
							//alert("12")
					}
				}else{
					setTimeout(arguments.callee,80)
				}
			*/
					/*if(auto_index==-(imglen-1)){
						container_img.style.left=0+"px";
						autoPlay();
					}else if(auto_index==-i){
						setTimeout(arguments.callee,1000)
					}else{
						setTimeout(arguments.callee,80)
					}*/
				
				/*switch(auto_index){
					case -1:
					case -2:
					case -3:
					setTimeout(arguments.callee,1000);
					break;
					case -4:

					container_img.style.left=0+"px";
					autoPlay();
					break;
					default:
					setTimeout(arguments.callee,80)

				}*/
				
			
		//},1000);
//var trimer=null;


	var highlight=$(".active");
	var index=getIndex(highlight);
	
	
	if((index+1)==imglen){
		iTarget=0;
		startMove(container_img,iTarget,"left")
		//clearInterval(trimer)
		removeClass(dotul);
		
		addClass(li[0],"active")
	}else{
	var nextElem=highlight.nextElementSibling;
	removeClass(dotul);
	addClass(nextElem,"active");

	var iTarget=(-img[0].width)*getIndex(nextElem);

	startMove(container_img,iTarget,"left")
	}

}
	
trimer=setInterval(autoPlay,3000)


//鼠标事件
addEvent(box,"mouseover", function(){
	
	clearInterval(trimer);
});
addEvent(box,"mouseout",function(){
	trimer=setInterval(autoPlay,3000)
});


















	//移动函数
	//option参数为opacity或left
function startMove(element,iTarget,option){
	clearInterval(element.trimer);
	//透明度
	if(option=="opacity"){
		var opacity=parseFloat(getStyle(element,"opacity"))*100;
			element.trimer=setInterval(function(){
				var speed=(iTarget-opacity)/10 ;
				speed=speed>0 ? Math.ceil(speed):Math.floor(speed);
				if(opacity==iTarget){
					clearInterval(element.trimer);
				}else{	
					opacity+=speed;
					if(element.style.filter ){
						element.style.filter = "alpha(opacity:" + opacity + ")";
						}else{ //IE
			        		element.style.opacity = opacity / 100;
			        } //标准
				}
			},30);
	}else{
	//位移
		var left=parseInt(getStyle(element,"left"));
			element.trimer=setInterval(function(){
				var speed=(iTarget-left)/10 ;
				speed=speed>0 ? Math.ceil(speed):Math.floor(speed);
				if(left==iTarget){
					clearInterval(element.trimer);
				}else{
					left+=speed;
					element.style.left=left+"px";
				}
			},30);
	}
}
	/*function moveelement(element,i){
		// var flag=true;
		clearTimeout(element.interval);
		var destination=parseInt(-i*600);
		var left=parseInt(getStyle(container_img,"left"));
		var speed=Math.round(Math.abs((Math.abs(destination)-Math.abs(left)))/10);

		element.interval=setTimeout(function(){
			if(left>destination){
				left-=speed;
				element.style.left=left+"px";
				setTimeout(arguments.callee,80)
			}else if(left==destination){//一个=为赋值
				clearTimeout(element.interval);
			}else{
				left+=speed;
				element.style.left=left+"px";
					setTimeout(arguments.callee,80)
			}
		},100);
		

	}*/


	var listener=function(){
		var index=getIndex(this);
		removeClass(dotul);
		addClass(li[index],"active");
		clearInterval(trimer);
		var iTarget=(-img[0].width)*index;;
		startMove(container_img,iTarget,"left")
		
	}
	$.delegate($(".dot"), "li", "click",listener);


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
//获取单击时的index	
function getIndex(element) {
    var aBrother = element.parentNode.children;
    
    for (var i = 0, len = aBrother.length; i < len; i++) {
        if (aBrother[i] == element) {
            return i;
        }
    }
}

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
//$.delegate(selector,tag,event,listener)
	
	//$.click(dotli[0],function(){
		/*img[3].style.left=1800+"px";
		img[2].style.left=1200+"px";
		img[1].style.left=600+"px";
		img[0].style.left=0+"px";*/
//		moveelement(img,0);
//	});
//	$.click(dotli[1],function(){
		/*img[3].style.left=1800+"px";
		img[2].style.left=1200+"px";
		img[1].style.left=0+"px";
		img[0].style.left=0+"px";*/
//		moveelement(img,1);
		
//	});
//	$.click(dotli[2],function(){
		/*img[3].style.left=1800+"px";
		img[2].style.left=0+"px";
		img[1].style.left=0+"px";
		img[0].style.left=0+"px";*/
//		moveelement(img,2);
		
//	});
//	$.click(dotli[3],function(){
//		moveelement(img,3);
		/*img[3].style.left=0+"px";
		img[2].style.left=0+"px";
		img[1].style.left=0+"px";
		img[0].style.left=0+"px";
		*/
//	});



//获取事件绑定下的index
	/*function getIndex(farther_element,childelem){
		var element=farther_element;
		var child=element.childNodes;
		var len=child.length;
		var j=0;
		for(i=0;i<len;i++){
			if(child[i].nodeType==1){
				j++;
				if(child[i].tagName.toLowerCase()==childelem){
					return j;
				}
			}
		}
	}*/