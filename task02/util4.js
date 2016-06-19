function each(arr,fn){
	var len=arr.length;
	for(i=0;i<len;i++){
		fn.call(this,arr[i],i);
	}
}