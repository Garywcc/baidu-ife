window.onload=function(){
//(function(){



	 var inpu=$("#ip"),
	 sub=$("#submit");
	 
	 
	 
	 var handler=function(){
	 	var arr=[];
	 	var spli=inpu.value.split(/\,|\，|\；|\：|\s/);
	 	var len=spli.length;
	 	for(var i=0;i<len;i++){
	 		arr.push(spli[i])
	 	}
	 	var error=$(".error");
	 	//var error=document.createElement("div");//irefox支持这种createElement的定义方式
	 	//document.body.insertBefore(error,sub);
	 	if(arr.length>10||arr==""){
	 		
	 		error.style.color="red";
	 		error.innerHTML="您的输入不合要求";
	 	}else{
	 		error.style.visibility="hidden";
	 		
	 	 	//$(".show").innerHTML=uniqArray(arr);
	 	 	var uniarr=uniqArray(arr);
	 	 	for(var i=0;i<uniarr.length;i++){
	 	 		$(".show").innerHTML+="<label>"+"<input type='checkbox'>"+uniarr[i]+"</label>";





	 	 		/*var inp=document.createElement("input");
	 	 		inp.type="checkbox";
	 	 		inp.name=uniarr[i];

	 	 		document.body.appendChild(inp);
	 	 		var lab=document.createElement("label");
	 	 		lab.for=uniarr[i]
	 	 		document.body.appendChild(lab);
	 	 		
	 	 		var txt=document.createTextNode(uniarr[i]);
	 	 		document.body.appendChild(txt);

	 	 		document.body.insertBefore(txt,inp);
	 	 		document.body.insertBefore(lab,inp);
	 	 		/*var lab=document.createElement("label");
	 	 		alert(lab)*/
	 	 	}
	 	 }
	 }
	$.click(sub,handler);
	

	




















//})();


}