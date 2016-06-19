function isArray(arr){
	if (arr instanceof Array){
		console.log("true");
	} 
}
function isFunction(fun){
	if(fun instanceof Function){
		console.log("true")
	}
}


function cloneObject(src){
  if(typeof(src)=="number" || typeof(src)=="string" || typeof(src)=="boolean"){
    
   var clone=src;
    return clone;

    
  }else{
  var dis=Object.prototype.toString.call(src);
  switch(dis){
    case "[object Date]":
      var clone=new Date(getTime(src));
      return clone;
      break;
    case "[object Array]":
      var clone=[];
      for(i=0,count=src.length;i<count;i++){
        clone.push(src[i]);
      };
      return clone;
      break;

    case "[object Object]":

      var clone={};
      for(key in src){
        if(src.hasOwnProperty(key)){

          clone[key]=cloneObject(src[key]);

        }
      };
      return clone;
      break;
  }
  }
}


// 相关资料
/*https://segmentfault.com/a/1190000004205425
http://www.bubuko.com/infodetail-1424759.html
http://www.zhufengpeixun.cn/JavaScriptmianshiti/2014-02-28/271.html*/