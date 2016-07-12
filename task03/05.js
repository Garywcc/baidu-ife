window.onload=function(){

       var middle=$(".middle-middle")[0];
      var right=$("#right");
      var left_bottom=$(".left-bottom")[0];
      var list=$(".list")[0];
      var write=$("#write");
      var title=$("#title");
      //var dateContent=$("#dateContent");
      //var titleContent=$("#titleContent");
      //var replaceDate=$("#replaceDate");
      var content=$(".content")[0];
     //任务个数
      var span_list=$(".span-list2");
      var pattern=/^\((\d)\)$/;
      var num=0;
      for(var i=0,len=span_list.length;i<len;i++){
        var parent=span_list[i].parentNode.parentNode;
        
        var spans=parent.getElementsByTagName("span");
          for(var j=0,len1=spans.length;j<len1;j++){

            if(spans[j].className.indexOf("span-list1")>-1){
             pattern.test(spans[j].innerHTML) ;
             
             var num1=parseInt(RegExp.$1);
             num+=num1;
            }
            
            
          }
          span_list[i].innerHTML="("+num+")";
          num=0;
      }
      

//读取保存的数据
// var msgtr=localStorage.getItem(index );

         if(localStorage.length!==0){
                var arr=[];
                var sps=list.getElementsByTagName("span");
                      for(var i=0,len=sps.length;i<len;i++){
                        if(sps[i].className.indexOf("list-common")>-1){
                                        arr.push(sps[i]);
                                        //index++;
                        }
                      }
                      //点击按钮标题的改变
                                  /*  var sp=null;
                                    var middSpans=middle.getElementsByTagName("span");
                                    for(var i=0,len=middSpans.length;i<len;i++){
                                      if(middSpans[i].className.indexOf("todo bgcolor")>-1){
                                        sp=middSpans[i];
                                      }
                                    }*/

                      for(var i=0,len=localStorage.length;i<len;i++){
                            var key= localStorage .key(i);
                            var msgtr=localStorage.getItem(key);
                            var msg=JSON.parse(msgtr);
                         
                        //文件夹
                        if(msg.index){
                              var index=msg.index;
                              var name=msg.name;
                              var inner=msg.inner;
                              var div=document.createElement("div");
                                    div.className="fold1";
                                    div.style.display="block";
                                    div.innerHTML=inner;
                               
                              arr[index].parentNode.appendChild(div);
                            }
                        //文件
                       if(msg.index1){
                        
                              var index=msg.index1;
                              var name=msg.name1;
                              var inner=msg.inner1;
                         var lilist=getElementsByClassName("iconfont1");
                         var pare=lilist[index].parentNode;
                         var span=document.createElement("span");
                            //span.style.display="block"
                            span.className="licommon";
                            span.innerHTML="<li class=\"iconfont\">&#xe66e;</li>"+name+"<span class=\"span-list1\">(0)<\/span>"+"<li id=\"delete\">&#xe651;<\/li>";
                            insertAfter(span,pare);


                        }

                      if(msg.titleText){

                           var  writeText=msg.writeText;
                            var titleText=msg.titleText;
                            var dateContentText=msg.dateContentText;
                            var  listIndex=msg.listIndex;
                            var parId=msg.parId;


                             var createDiv=document.createElement("div");
                                  createDiv.style.display="none";
                                  createDiv.id=titleText;
                                  createDiv.className="contentFrame";
                                  createDiv.innerHTML="<div class=\"right-top\"><span id=\"titleContent\">"+titleText+"</span><li class=\"right-right\">&#xe602;<\/li><li class=\"cursor\">&#xe71f;<\/li>"+"<\/div><div class=\"right-middle\">任务日期：<span class=\"replaceDate\">"+dateContentText+"<\/span><\/div><div class=\"content\">"+writeText+"<\/div>";
                           //获取所有的todo span元素
                         
                           var Id1=document.getElementById("Task1");
                           if(Id1!==null){


                           var spss=Id1.getElementsByTagName("span");
                           spss[listIndex].innerHTML=titleText;
                            }
                           right.appendChild(createDiv);
                            
                                    //sp.innerHTML=titleText;
                        }   


                      }
             
              }







      
    //新增分类按钮

addEvent(left_bottom, "click", addlist);
                        function addlist(){
                                var name=prompt("请输入新增分类名称","");
                                var index=0;
                                 var arr=[];

                                var sps=list.getElementsByTagName("span");
                                  for(var i=0,len=sps.length;i<len;i++){
                                          if(sps[i].className.indexOf("list-common")>-1){
                                                          arr.push(sps[i]);
                                                          //index++;
                                          }
                                        }
                                    		/*if(sps[i].className.indexOf("choose-left")>-1){
                                    			index=i;
                                    			break;	
                                    		 }
                                   	}*/

                                      for(var key in arr){

                                        if(arr[key].className.indexOf("choose-left")>-1){
                                          if(arr[key].className.indexOf("list-common1")>-1){
                                            return false;
                                          }else{
                                             index=key;
                                          }
                                              // index=key;
                                        }
                                      }
                               var sh=null;
                              //获取点击时的div 的display
                              var parent=arr[index].parentNode;

                              var div1=parent.getElementsByTagName("div");

                                      if(div1.length !==0){
                                         sh=getStyle(div1[0],"display")
                                      }else{
                                        sh="block";
                                      }

                                    	//创建元素
                                      //var fragment=document.createDocumentFragment();
                                    	var div=document.createElement("div");
                                      div.className="fold1";
                                      div.style.display=sh;
                                      div.innerHTML="<span class=\"licommon1 \"><li class=\"iconfont1\">&#xe66b;<\/li>"+name+"<span class=\"span-list2\">(0)<\/span><li id=\"delete\">&#xe651;<\/li><\/span>";
                                    //	var s=parseInt(index)+1;
                                    if(name!=null)  {

                                      arr[index].parentNode.appendChild(div);

                                                      var span_list=$(".span-list2");
                                                      var pattern=/^\((\d)\)$/;
                                                      var num=0;
                                                      for(var i=0,len=span_list.length;i<len;i++){
                                                        var parent=span_list[i].parentNode.parentNode;
                                                        
                                                        var spans=parent.getElementsByTagName("span");
                                                          for(var j=0,len1=spans.length;j<len1;j++){

                                                            if(spans[j].className.indexOf("span-list1")>-1){
                                                             pattern.test(spans[j].innerHTML) ;
                                                             
                                                             var num1=parseInt(RegExp.$1);
                                                             num+=num1;
                                                            }
                                                            
                                                            
                                                          }
                                                          span_list[i].innerHTML="("+num+")";
                                                          num=0;
                                                }

                                      //保存相关内容
                                      var  msg={
                                       
                                        index:index,
                                       name:name,
                                       inner:div.innerHTML
                                      }
                                      localStorage.setItem(name,JSON.stringify(msg));
                                      //if(localStorage.name)
                                      //if(s<arr.length){
                                           // list.insertBefore(div,arr[s].parentNode);
                                      //}
                                    }else{
                                      return false;
                                    }
                                      
                                      
                                     

                                }

      //list-common的代理事件
delegateEvent(list, "span", "click",listener);
      function listener(eve){
          //样式
          reclass(list,"choose-left",this)
// add(this,"choose-left")不懂
            //张开与收起
            if(this.className.indexOf("list-common")>-1){

                  var  parent=this.parentNode;

                  var div=parent.getElementsByTagName("div");
                  
                  if(div.length!==0){
                     for(var i=0,len=div.length;i<len;i++){
                     
                            var sh=getStyle(div[i],"display");
                            
                          if(sh=="block"){
                            div[i].style.display="none";
                          }else if(sh=="none"){
                            
                            div[i].style.display="block";
                          }else{
                            return false;
                          }
                      
                    }
                  }else{
                    return false;
                  }
            }else if(this.className.indexOf("licommom1")>-1){
              var  parent=this.parentNode;
              var sps=parent.getElementsByClassName("licommom");
                if(sps!==null){
                     for(var i=0,len=sps.length;i<len;i++){
                     
                            var sh=getStyle(sps[i],"display");
                            
                          if(sh=="block"){
                            sps[i].style.display="none";
                          }else if(sh=="none"){
                            
                            sps[i].style.display="block";
                          }else{
                            return false;
                          }
                      
                    }
                  }

            }else{
              return false;
            }

      }
     //为delete绑定事件
delegateEvent1(list, "delete", "click",function(){
     	//alert(this.parentNode)
     	//if(this.parentNode.parentNode.parentNode.className=="list"){
     		//removeEle(list,this.parentNode);
     //	}else{
                         		
                              //var parent=this.parentNode;
                              var name=this.previousSibling.previousSibling.nodeValue;
                             
                              if(localStorage.getItem(name)){
                                
                                localStorage.removeItem(name)
                              }
                              /*if(localStorage.getItem(name1)){
                                
                                localStorage.removeItem(name1)
                              }*/
                              //删除中间部分
                             
                              var par=this.parentNode;
                              
                              if(par.className.indexOf("licommon")>-1 ){
                              
                                   var paren=par.getElementsByTagName("span")[0];
                                    var text=paren.previousSibling.nodeValue;
                                    var frameId=$("#"+text);
                                  if(frameId!==null){

                                    middle.removeChild(frameId);
                                  }
                             
                              removeEle(this.parentNode.parentNode,this.parentNode); 
                            }

     	//}
     	
     }) ;
    
    //删除元素
      function removeEle(fath,child){
            fath.removeChild(child)
      }
      	
  
     //增加元素
    function addclass(classname){
    	
    	if(!this.className.match(new RegExp('(\\s|^)'+classname+'(\\s|$)'))){
    		
    		this.className+="  "+classname;

    	 }
    }
      //完成等按钮事件
      var midd_top=$(".middle-top")[0];
      
delegateEvent(midd_top, "span", "click",selec);
        function selec(){
          
          reclass(midd_top,"choose",this)
        
        }
        //移除添加class
        function reclass(fath,classname,chain){

          //移除class
          
          var sps=fath.getElementsByTagName("span");
          for(var i=0,len=sps.length;i<len;i++){
            //console.log(sps[i].className)
            if(sps[i].className.indexOf(classname)>-1){
              sps[i].className=sps[i].className.replace(classname,"");
               
          }
          //添加class
          addclass.call(chain,classname);
        }
}



//中间部分的事件]

var frames=getElementsByClassName("frame");
var tasklist=$(".task-list");

var todo=$(".todo");
       //先隐藏contentFrame
          var contentFrame=$(".contentFrame");
          for(var i=0,len=contentFrame.length;i<len;i++){
            contentFrame[i].style.display="none";
          }
         
    for(var i=0,len=frames.length;i<len;i++){
              delegateEvent2(frames[i], "todo", "click",todoFun)
            }

            function todoFun(){
             
              /*var e=e||window.event;
              var target=e.target||e.srcElement;*/
                 write.style.display="none";
                 title.style.display="none";
                 dateContent.display="none";
                //点击按钮背景的变化
               for (var i=0,len=todo.length;i<len;i++){
                          todo[i].className="todo";

                          }

                        this.className="todo bgcolor";
                 //右边内容的变化
                  //取得任务名称
                  var text=this.innerHTML;
                 
                  //点击时对应id的contentFrame显示
                  var chooseId=$("#"+text);
                  
                  if(chooseId){
                            var contentFrame=$(".contentFrame");
                            for(var i=0,len=contentFrame.length;i<len;i++){
                              contentFrame[i].style.display="none";
                            }
                    chooseId.style.display="block";
                  }else{
                    
                    //没有具体内容时创建
                    //获取年月日
                    var date=this.parentNode.previousSibling.innerHTML;

                    var createDiv=document.createElement("div");
                    createDiv.id=text;
                    createDiv.className="contentFrame";
                    createDiv.innerHTML="<div class=\"right-top\"><span class=\"titleContent\">"+text+"<\/span><li class=\"right-right\">&#xe602;<\/li><li class=\"cursor\">&#xe71f;<\/li>"+"<\/div><div class=\"right-middle\">任务日期：<span class=\"replaceDate\">"+date+"<\/span><\/div><div class=\"content\">相关内容<\/div>";
                    
                    //没有具体内容时再隐藏
                            var contentFrame=$(".contentFrame");
                            for(var i=0,len=contentFrame.length;i<len;i++){
                              contentFrame[i].style.display="none";
                            }
                            right.appendChild(createDiv)
                            createDiv.style.display="block"
                  }

          }    

/*for (var i=0,len=todo.length;i<len;i++){
  addEvent(todo[i], "click", function(){
    for (var i=0,len=todo.length;i<len;i++){
      todo[i].className="todo";

      }

    this.className="todo bgcolor";
  }) 
}*/

/*if(sps[i].className.indexOf(classname)>-1){
              sps[i].className=sps[i].className.replace(classname,"");
   }*/




//frame的改变
var licommon=$(".licommon");
for(var i=0,len=licommon.length;i<len;i++){
  addEvent(licommon[i], "click", listen) 
}
      function listen(){
        //隐藏所有的frame
        for(var i=0,len=frames.length;i<len;i++){
          frames[i].style.display="none"
        }
        //获取数字
        var numberString=this.getElementsByTagName("span")[0].innerHTML;
        var pattern=/^\((\d)\)$/;
          pattern.test(numberString) ;   
        var number=parseInt(RegExp.$1);
        var sp=this.getElementsByTagName("span")[0];
        if(number!==0){

        

        //frame相关
        
        frameRelate(sp);
        
      
      }else{
        var c=confirm("确定要创建新任务吗？");
        if(c==true){
          frameRelate(sp)
        }else{
          return false;
        }
      }

      }
//frame相关函数
function  frameRelate(sp){
       var text=sp.previousSibling.nodeValue;
        var fra=$("#"+text);

        if(fra!==null){
          fra.style.display="block";
        }else{
          //创建
          
          var fraDiv=document.createElement("div");
          fraDiv.id=text;
          fraDiv.className="frame";
          fraDiv.style.display="block";
          fraDiv.innerHTML="<div class=\"date\">2016-06-15<\/div><div class=\"task-list\"><span class=\"todo\">to-do 2<\/span><\/div>";
          middle.appendChild(fraDiv)
          //添加事件
          delegateEvent2(fraDiv, "todo", "click",todoFun)
       }
}



//新增子分类事件
var middleBottom=$(".middle-bottom")[0];

addEvent(middleBottom, "click", addeve);
          function addeve(){

              var name1=prompt("请输入新增子分类名称","");
              if(name1!==null){
                //点击的是文件时
                var spanLicommon=getElementsByClassName("licommon");
                for(var i=0,len=spanLicommon.length;i<len;i++){
                  if(spanLicommon[i].className.indexOf("choose-left")>-1){
                    return false;
                  }
                }
            
                //获取文件夹的li
                var index1=null;
                var pare=null;
                var lilist=getElementsByClassName("iconfont1");
                
               
                for(var j=0,len=lilist.length;j<len;j++){
                    if( lilist[j].parentNode.className.indexOf("choose-left")>-1 ){
                      if(lilist[j].parentNode.className.indexOf("list-common1")==-1){
                         
                        pare=lilist[j].parentNode;
                        index1=j;
                     }else{
                      return false;
                       
                    }
                     }
                }
              
                var span=document.createElement("span");
                span.className="licommon";
                span.innerHTML="<li class=\"iconfont\">&#xe66e;</li>"+name1+"<span class=\"span-list1\">(0)<\/span>"+"<li id=\"delete\">&#xe651;<\/li>";
                insertAfter(span,pare);


                var  msg={
                                       
                                        index1:index1,
                                       name1:name1,
                                       inner1:span.innerHTML
                                      }
                 localStorage.setItem(name1,JSON.stringify(msg));

              }else{
                return false;
              }

          }


//单击to-do 的事件
/*var frame=
delegateEvent2(fartherelem, selec, type,listener)
*/



//对号的相关事件
  var rightRight=$(".right-right");
  delegateEvent2(right, "right-right", "click",function(){
      var writeText=write.firstChild.value;
      var titleText=title.value;
      var dateContentText=dateContent.value;
      //获取点击是对应的属性
      var nowPar=this.parentNode.parentNode;

      var titleContent=getElementsByClassName1(nowPar,"titleContent");
      var  replaceDate=getElementsByClassName1(nowPar,"replaceDate");
      var content=getElementsByClassName1(nowPar,"content");
      if(writeText && titleText && dateContentText){


      titleContent.innerHTML=titleText;
      replaceDate.innerHTML=dateContentText;
      content.innerHTML=writeText;
      //点击按钮标题的改变
      var sp=null;
      var index=null;
      var middSpans=middle.getElementsByTagName("span");
      for(var i=0,len=middSpans.length;i<len;i++){
        if(middSpans[i].className.indexOf("todo bgcolor")>-1){
          sp=middSpans[i];
          listIndex=i;
        }
      }
      var parId=sp.parentNode.parentNode.id;

      sp.innerHTML=titleText;
      //保存数据
      var msg={
          writeText:writeText,
          titleText:titleText,
          dateContentText:dateContentText,
          listIndex:listIndex,
          parId:parId
      }
      localStorage.setItem(titleText,JSON.stringify(msg));
      //隐藏输入框
       write.style.display="none";
        title.style.display="none";
        dateContent.style.display="none";
    }else{
      alert("请填完整")
    }
  })
//编辑按钮的相关事件

  delegateEvent2(right, "cursor", "click",function(){
    //如果存在返回false
    //点击按钮标题的改变
      var sp=null;
      var middSpans=middle.getElementsByTagName("span");
      for(var i=0,len=middSpans.length;i<len;i++){
        if(middSpans[i].className.indexOf("todo bgcolor")>-1){
          sp=middSpans[i];
        }
      }
      if(localStorage.getItem(sp.innerHTML)){
        return false;
      }else{
        write.style.display="block";
        title.style.display="block";
        dateContent.style.display="block";
      }
        
  })


}