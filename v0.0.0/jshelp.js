var jh = {
	information: {
		line: 415
	},
	select: function (type, name, num) {
		if (type == 'id') {
			return document.getElementById(name);
		} else if (type == 'class') {
			return document.getElementsByClassName(name)[num];
		} else if (type == 'tag') {
			return document.getElementsByTagName(name)[num];
		}
	},
	hide: function (element) {
		element.style.display = 'none';
	},
	text: function (element, text) {
		element.innerHTML = text;
	},
	randomString: function (length) {
		length = length || 52;
		var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var max = letters.length;
		var ret = '';
		for (i = 0; i < length; i++) {
			ret += letters.charAt(Math.floor(Math.random() * max));
		}
		return ret;
	},
	randomNumber: function (min, max) {
		return (Math.floor(Math.random() * (max - min)) + min);
	},
	clone: function (from, to) {
		var to = to || {},
			toStr = Object.prototype.toString,
			arrStr = '[object Array]';
		for (var prop in from) {
			if (from.hasOwnProperty(prop)) {
				if (typeof (from[prop]) == 'object') {
					if (toStr.call(from[prop]) == arrStr) {
						to[prop] = [];
					} else {
						to[prop] = {};
					}
					this.clone(from[prop], to[prop]);
				} else {
					to[prop] = from[prop];
				}
			}
		}
	},
	newCookie: function (name, value, time) {
		var expdate = new Date();
		expdate.setTime(expdate.getTime() + time);
		document.cookie = name + ' = ' + value + ';expires = ' + expdate.toGMTString() + ';path = /';
	},
	getCookie: function (c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + '=');
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(';', c_start);
				if (c_end == -1) {
					c_end = document.cookie.length;
				}
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	},
	alert: function (text, style) {
		if (style == undefined) {
			var box = document.createElement('div');
			box.style.position = 'fixed';
			box.style.width = '100%';
			box.style.height = '100%';
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			box.style.margin = '0';
			box.style.padding = '0';
			box.style.top = '0';
			box.style.left = '0';
			document.getElementsByTagName('body')[0].appendChild(box);
			var alertbox = document.createElement('div');
			alertbox.style.position = 'fixed';
			alertbox.style.width = '30%';
			alertbox.style.height = '30%';
			alertbox.style.margin = '0';
			alertbox.style.padding = '0';
			alertbox.style.top = '34%';
			alertbox.style.left = '34%';
			alertbox.style.backgroundColor = 'white';
			alertbox.style.border = '1px solid #444';
			alertbox.style.paddingLeft = '2%';
			alertbox.style.paddingRight = '2%';
			alertbox.style.borderRadius = '4px';
			alertbox.innerHTML = text;
			box.appendChild(alertbox);
			var okbutton = document.createElement('div');
			okbutton.style.width = '40px';
			okbutton.style.height = '25px';
			okbutton.style.position = 'relative';
			okbutton.style.border = '1px solid #444';
			okbutton.style.marginTop = '10px';
			okbutton.style.paddingLeft = '20px';
			okbutton.style.paddingTop = '10px';
			okbutton.style.cursor = 'default';
			okbutton.innerHTML = 'ok';
			okbutton.onclick = function () {
				box.style.display = 'none';
			}
			alertbox.appendChild(okbutton);
		} else if (style == 'color: orange') {
			var box = document.createElement('div');
			box.style.position = 'fixed';
			box.style.width = '100%';
			box.style.height = '100%';
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			box.style.margin = '0';
			box.style.padding = '0';
			box.style.top = '0';
			box.style.left = '0';
			document.getElementsByTagName('body')[0].appendChild(box);
			var alertbox = document.createElement('div');
			alertbox.style.position = 'fixed';
			alertbox.style.width = '30%';
			alertbox.style.height = '30%';
			alertbox.style.margin = '0';
			alertbox.style.padding = '0';
			alertbox.style.top = '34%';
			alertbox.style.left = '34%';
			alertbox.style.backgroundColor = 'orange';
			alertbox.style.border = '2px dashed #187af4';
			alertbox.style.paddingLeft = '2%';
			alertbox.style.paddingRight = '2%';
			alertbox.style.borderRadius = '5px';
			alertbox.style.color = 'white';
			alertbox.innerHTML = text;
			box.appendChild(alertbox);
			var okbutton = document.createElement('div');
			okbutton.style.width = '40px';
			okbutton.style.height = '25px';
			okbutton.style.position = 'relative';
			okbutton.style.border = '1px solid white';
			okbutton.style.marginTop = '10px';
			okbutton.style.paddingLeft = '20px';
			okbutton.style.paddingTop = '10px';
			okbutton.style.cursor = 'default';
			okbutton.style.color = 'white';
			okbutton.innerHTML = 'ok';
			okbutton.onclick = function () {
				box.style.display = 'none';
			}
			alertbox.appendChild(okbutton);
		} else if (style == 'scene: dark') {
			var box = document.createElement('div');
			box.style.position = 'fixed';
			box.style.width = '100%';
			box.style.height = '100%';
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			box.style.margin = '0';
			box.style.padding = '0';
			box.style.top = '0';
			box.style.left = '0';
			document.getElementsByTagName('body')[0].appendChild(box);
			var alertbox = document.createElement('div');
			alertbox.style.position = 'fixed';
			alertbox.style.width = '30%';
			alertbox.style.height = '30%';
			alertbox.style.margin = '0';
			alertbox.style.padding = '0';
			alertbox.style.top = '34%';
			alertbox.style.left = '34%';
			alertbox.style.backgroundColor = '#333';
			alertbox.style.border = '2px solid #444';
			alertbox.style.paddingLeft = '2%';
			alertbox.style.paddingRight = '2%';
			alertbox.style.borderRadius = '5px';
			alertbox.style.color = '#aaa';
			alertbox.innerHTML = text;
			box.appendChild(alertbox);
			var okbutton = document.createElement('div');
			okbutton.style.width = '40px';
			okbutton.style.height = '25px';
			okbutton.style.position = 'relative';
			okbutton.style.border = '1px solid #444';
			okbutton.style.marginTop = '10px';
			okbutton.style.paddingLeft = '20px';
			okbutton.style.paddingTop = '10px';
			okbutton.style.cursor = 'default';
			okbutton.style.color = '#aaa';
			okbutton.innerHTML = 'ok';
			okbutton.onclick = function () {
				box.style.display = 'none';
			}
			alertbox.appendChild(okbutton);
		} else if (style == 'scene: light') {
			var box = document.createElement('div');
			box.style.position = 'fixed';
			box.style.width = '100%';
			box.style.height = '100%';
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			box.style.margin = '0';
			box.style.padding = '0';
			box.style.top = '0';
			box.style.left = '0';
			document.getElementsByTagName('body')[0].appendChild(box);
			var alertbox = document.createElement('div');
			alertbox.style.position = 'fixed';
			alertbox.style.width = '30%';
			alertbox.style.height = '30%';
			alertbox.style.margin = '0';
			alertbox.style.padding = '0';
			alertbox.style.top = '34%';
			alertbox.style.left = '34%';
			alertbox.style.backgroundColor = 'white';
			alertbox.style.border = '2px solid #999';
			alertbox.style.paddingLeft = '2%';
			alertbox.style.paddingRight = '2%';
			alertbox.style.borderRadius = '5px';
			alertbox.style.color = '#187af4';
			alertbox.innerHTML = text;
			box.appendChild(alertbox);
			var okbutton = document.createElement('div');
			okbutton.style.width = '40px';
			okbutton.style.height = '25px';
			okbutton.style.position = 'relative';
			okbutton.style.border = '1px solid #999';
			okbutton.style.marginTop = '10px';
			okbutton.style.paddingLeft = '20px';
			okbutton.style.paddingTop = '10px';
			okbutton.style.cursor = 'default';
			okbutton.style.color = '#187af4';
			okbutton.innerHTML = 'ok';
			okbutton.onclick = function () {
				box.style.display = 'none';
			}
			alertbox.appendChild(okbutton);
		} else if (style == 'color: blue') {
			var box = document.createElement('div');
			box.style.position = 'fixed';
			box.style.width = '100%';
			box.style.height = '100%';
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			box.style.margin = '0';
			box.style.padding = '0';
			box.style.top = '0';
			box.style.left = '0';
			document.getElementsByTagName('body')[0].appendChild(box);
			var alertbox = document.createElement('div');
			alertbox.style.position = 'fixed';
			alertbox.style.width = '30%';
			alertbox.style.height = '30%';
			alertbox.style.margin = '0';
			alertbox.style.padding = '0';
			alertbox.style.top = '34%';
			alertbox.style.left = '34%';
			alertbox.style.backgroundColor = '#187af4';
			alertbox.style.border = '2px solid #fff';
			alertbox.style.paddingLeft = '2%';
			alertbox.style.paddingRight = '2%';
			alertbox.style.borderRadius = '5px';
			alertbox.style.color = 'white';
			alertbox.innerHTML = text;
			box.appendChild(alertbox);
			var okbutton = document.createElement('div');
			okbutton.style.width = '40px';
			okbutton.style.height = '25px';
			okbutton.style.position = 'relative';
			okbutton.style.border = '1px solid #fff';
			okbutton.style.marginTop = '10px';
			okbutton.style.paddingLeft = '20px';
			okbutton.style.paddingTop = '10px';
			okbutton.style.cursor = 'default';
			okbutton.style.color = 'white';
			okbutton.innerHTML = 'ok';
			okbutton.onclick = function () {
				box.style.display = 'none';
			}
			alertbox.appendChild(okbutton);
		} else if (style == 'color: green') {
			var box = document.createElement('div');
			box.style.position = 'fixed';
			box.style.width = '100%';
			box.style.height = '100%';
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			box.style.margin = '0';
			box.style.padding = '0';
			box.style.top = '0';
			box.style.left = '0';
			document.getElementsByTagName('body')[0].appendChild(box);
			var alertbox = document.createElement('div');
			alertbox.style.position = 'fixed';
			alertbox.style.width = '30%';
			alertbox.style.height = '30%';
			alertbox.style.margin = '0';
			alertbox.style.padding = '0';
			alertbox.style.top = '34%';
			alertbox.style.left = '34%';
			alertbox.style.backgroundColor = 'lawngreen';
			alertbox.style.border = '2px solid #999';
			alertbox.style.paddingLeft = '2%';
			alertbox.style.paddingRight = '2%';
			alertbox.style.borderRadius = '5px';
			alertbox.style.color = '#999';
			alertbox.innerHTML = text;
			box.appendChild(alertbox);
			var okbutton = document.createElement('div');
			okbutton.style.width = '40px';
			okbutton.style.height = '25px';
			okbutton.style.position = 'relative';
			okbutton.style.border = '1px solid #999';
			okbutton.style.marginTop = '10px';
			okbutton.style.paddingLeft = '20px';
			okbutton.style.paddingTop = '10px';
			okbutton.style.cursor = 'default';
			okbutton.style.color = '#444';
			okbutton.innerHTML = 'ok';
			okbutton.onclick = function () {
				box.style.display = 'none';
			}
			alertbox.appendChild(okbutton);
		}
	},
	math: {
		PNseq: function (length) {
			var first = 1;
			var second = 1;
			var third;
			var ret = [1, 1];
			for (var i = 0; i < length - 2; i++) {
				third = first + second;
				first = second;
				second = third;
				ret.push(third);
			}
			return ret;
		},
		sum: function (num) {
			if (typeof (num) == 'object') {
				var ret = 0;
				for (var i = 0; i < num.length; i++) {
					ret += num[i];
				}
				return ret;
			} else {
				var ret = 0;
				for (var i = 0; i < arguments.length; i++) {
					ret += arguments[i];
				}
				return ret;
			}
		},
		max: function (num) {
			if (typeof (num) == 'object') {
				var ret = -Infinity;
				for (var i = 0; i < num.length; i++) {
					if (ret < num[i]) {
						ret = num[i];
					}
				}
				return ret;
			} else {
				var ret = -Infinity;
				for (var i = 0; i < arguments.length; i++) {
					if (ret < arguments[i]) {
						ret = arguments[i];
					}
				}
				return ret;
			}
		},
		min: function (num) {
			if (typeof (num) == 'object') {
				var ret = Infinity;
				for (var i = 0; i < num.length; i++) {
					if (ret > num[i]) {
						ret = num[i];
					}
				}
				return ret;
			} else {
				var ret = Infinity;
				for (var i = 0; i < arguments.length; i++) {
					if (ret > arguments[i]) {
						ret = arguments[i];
					}
				}
				return ret;
			}
		},
		factorial: function (num) {
			var ret = 1;
			for (var i = 1; i <= num; i++) {
				ret *= i;
			}
			return ret;
		},
		average: function (num) {
			if (typeof (num) == 'object') {
				return this.sum(num) / num.length;
			} else {
				return this.sum(arguments) / arguments.length;
			}
		},
		square: function (num) {
			return num * num;
		},
		sqrt: Math.sqrt,
		PI: 3.141592653589793238462643,
		pi: 3.141592653589793238462643,
		Pi: 3.141592653589793238462643,
		pI: 3.141592653589793238462643
	},
	contain: function (from, thing) {
		var exp = '/' + thing + '/';
		return eval(exp + '.test(' + '\'' + from + '\'' + ')');
	}
}