function simpletrim(str){
	var head=0;
	var end=str.length-1;
	while(str[head]=="," || str[head] == "\t"){head++};
	while(str[end]=="," || str[end] == "\t"){end--};
	return newstr=str.slice(head,end+1);
}

function trim(str){
	/*var pattern=/^\s+|\s+$/g;
	var newstr=str.match(pattern);
	alert(newstr)*/
		// return newstr.toString();
		var result = "";
    result = str.replace(/^\s+|\s+$/, ","); //使用正则进行字符串替换
    return result;
	
	
}