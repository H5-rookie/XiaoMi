function animate(obj,param,speedTime){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//定义一个监听属性是否都到达 了目标值的监听器
		var isOver = true;//true表示所有属性都到达 了目标值
		for(var attr in param){
			var current = 0;
			if(attr === "opacity"){
				current = getStyle(obj,attr) * 100;//扩大100倍处理
			}else{
				current = parseInt(getStyle(obj,attr));
			}
			var speed = (param[attr] - current)/10;
			speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);
			
			//当还有一个属性没有到达目标值 的时候，isOver置为false
			if(param[attr] != current){//
				isOver = false;
				//透明度不需要加单位
				if(attr === "opacity"){
					setFilter(obj,(current + speed)/100);
				}else{
					obj.style[attr] = current + speed + "px";  
				}
			}
		}
		//如果有一个属性还没有到达目标值，这里isOver监听器为false
		//如果isOver保存为true,说明所有的属性都到达 了目标值
		if(isOver){
			clearInterval(obj.timer);//清除定时器
		}
		
	},speedTime);
}
//获取的是带单位的字符串
function getStyle(obj,attr){
	if(!!window.getComputedStyle){//高版本
		return window.getComputedStyle(obj,null)[attr];
	}
	switch(attr){
		case "opacity":
			return 	obj.currentStyle["filter"].replace(/[^0-9\.]/g,"")/100;
	}
	return obj.currentStyle["filter"];
	
}
//兼容ie8设置透明度
function setFilter(obj,val){
	//高版本设置透明度
	if(!!window.getComputedStyle){//高版本
		obj.style.opacity = val;//var = 0-1
		return;
	}
	//ie8设置
	obj.style.filter = "alpha(opacity=" + val * 100 + ")";
}