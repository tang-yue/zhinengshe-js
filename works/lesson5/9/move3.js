function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}
function startMove(obj, json, fnEnd) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		// 假设所有的值都已经到了
		var bstop = true;
		for (attr in json) {
			var cur = 0;
			if (attr === 'opacity') {
				// 这里采用的是四舍五入法。针对计算机不能精确的存储小数
				cur = Math.round(getStyle(obj, attr) * 100);
			} else {
				cur = parseInt(getStyle(obj, attr));
			}
			var speed = (json[attr] - cur) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			// 等所有东西都到了，我关闭定时器
			// 如果没有不到的话，我才可以关闭定时器
			if (cur != json[attr])
				// 如果一次都没有碰到到的
				bstop = false; 
			if (bstop) {
				clearInterval(obj.timer);
				if (fnEnd)
					fnEnd();
			}
			if (attr === 'opacity') {
				obj.style.filter = 'alpha(opacity:' + cur + speed +')';
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}
		}
	}, 30);
}