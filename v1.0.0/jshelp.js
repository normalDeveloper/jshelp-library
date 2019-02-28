'use strict';

// plugin
function plugin(url) {
	var tag = document.createElement('script');
	tag.src = url;
	document.head.appendChild(tag);
}

var functions = {
	// DOM
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

	// tools
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

	contain: function (from, thing) {
		var exp = '/' + thing + '/';
		return eval(exp + '.test(' + '\'' + from + '\'' + ')');
	},

	// cookies
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

	// message
	message: function (text, style) {
		// default style
		if (style == undefined) {
			// container
			var box = document.createElement('div');
			// style
			box.style.position = 'fixed';
			box.style.width = '100%';
			box.style.height = '100%';
			box.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			box.style.margin = '0';
			box.style.padding = '0';
			box.style.top = '0';
			box.style.left = '0';
			// append
			document.getElementsByTagName('body')[0].appendChild(box);

			// alert box
			var alertbox = document.createElement('div');
			// style
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
			// append
			box.appendChild(alertbox);

			// ok button
			var okbutton = document.createElement('div');
			// style
			okbutton.style.width = '40px';
			okbutton.style.height = '25px';
			okbutton.style.position = 'relative';
			okbutton.style.border = '1px solid #444';
			okbutton.style.marginTop = '10px';
			okbutton.style.paddingLeft = '20px';
			okbutton.style.paddingTop = '10px';
			okbutton.style.cursor = 'default';
			// text
			okbutton.innerHTML = 'ok';
			// onclick
			okbutton.onclick = function () {
				box.style.display = 'none';
			}
			// append
			alertbox.appendChild(okbutton);
		}
	},

	// math methods
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
		pi: 3.141592653589793238462643
	}
};

function useJshelp(usercode) {
	function Code() {}
	Code.prototype = functions;
	var code = new Code();
	var codestr = 'code = ' + usercode.toString();
	eval(codestr);
	code.call(Code.prototype);
}