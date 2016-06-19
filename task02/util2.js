function uniqArray(arr){
	
	var newarr=arr;
	var count=newarr.length
	for(i=0;i<count;i++){
		

		if(typeof(arr[i])=="number" || typeof(arr[i])=="string"){

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





/*function uniqArray(arr) {
    // your implement
    var result = []; //创建一个新数组。
    for (var i = 0, l = arr.length; i < l; i++) {
        if (result.indexOf(arr[i]) === -1) { //查找是否已经含有该元素
            result.push(arr[i]); //添加到新数组
        }
    }
    return result; //返回新数组

}*/