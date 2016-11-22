function getStyle(obj, name) {
			if (obj.currentStyle) {
				return obj.currentStyle[name];
			} else {
				return getComputedStyle(obj, false)[name];
			}
		}
function startMove(obj, attr, iTarget, fnEnd) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		if (attr === 'opacity') {
			// 这里采用的是四舍五入法。针对计算机不能精确的存储小数
			cur = Math.round(getStyle(obj, attr) * 100);
		} else {
			cur = parseInt(getStyle(obj, attr));
		}
		var speed = (iTarget - cur) / 10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (cur == iTarget) {
			clearInterval(obj.timer);
			if (fnEnd) fnEnd();
			// 如果函数存在的话，则执行函数
		} else {
			if (attr === 'opacity') {
				obj.style.filter = 'alpha(opacity:' + cur + speed +')';
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}
		}
	}, 30);
}