'usestrict';

functions.message = function (text, style) {
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
}