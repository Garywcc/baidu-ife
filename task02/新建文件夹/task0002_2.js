window.onload=function(){

	var val=$("#valu"),
		sub=$("#sub");






	//按钮事件 
	
	var handler=function(){
		var txt=val.value;
		//正则
		var partten=/(\d{4})-(\d{2})-(\d{2})/;
		
		

		if(partten.test(txt)){
			//获取日期数字
			var setyear=parseInt(RegExp.$1),
				setmonth=parseInt(RegExp.$2),
				setday=parseInt(RegExp.$3);
			//定时调用
			var intervalId=setInterval(function(){
						//系统时间
						var myDate=new Date();
						//用户设置时间
						var setdate=new Date(setyear,setmonth-1,setday);
						
						//相差的秒数
						var sec=parseInt((setdate.getTime()-myDate.getTime())/1000);
						//求取日，小时，分钟，秒
						var disday=parseInt(sec/(24*60*60));
						var dishours=parseInt(sec/(60*60)%24);
						var disminute=parseInt(sec/60%60);
						var dissecond=parseInt(sec%60);
						if(sec!==0){
							$("#show").innerHTML="距离"+setyear+"年"+setmonth+"月"+setday+"日还有"+disday+"天"+dishours+"小时"+disminute+"分"+dissecond+"秒";
						},1000)}else{
							clearInterval(intervalId);
						}
			//$("#show").innerHTML="距离"+setyear+"年"+setmonth+"月"+setday+"日还有"+disday+"天"+nowhours+"小时"+nowminutes+"分"+nowsecond+"秒";
			// alert(myDate.getFullYear())
		}

	}
	$.click(sub,handler);





	



















}