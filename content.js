(function() {
	console.log('content.js loaded');

	function removeIcons() { //make this run once
		var icons = document.querySelectorAll("link[rel='shortcut icon'], link[rel='icon'], link[rel='apple-touch-icon']");
		var iconsArray = Array.prototype.slice.call(icons);
		iconsArray.forEach(function(child){
			child.parentNode.removeChild(child);
		});
	}


	var favicon = "https://www.google.com/s2/favicons?domain=" + window.location.hostname;
	// console.log(favicon);

	var pageTitle = document.title;

	function toDataURL(url, callback) { //this could probably be a canvas
	  var xhr = new XMLHttpRequest();
	  xhr.onload = function() {
    	var reader = new FileReader();
    	reader.onloadend = function() {
      	callback(reader.result);
	    }
	    reader.readAsDataURL(xhr.response);
	  };
	  xhr.open('GET', url);
	  xhr.responseType = 'blob';
	  xhr.send();
	}

	var faviconEncoded;
	toDataURL(favicon, function(dataUrl) {
	  faviconEncoded = dataUrl;
	})


  var link = document.createElement('link');
  link.rel = 'icon';
	link.type = 'image/svg';

	var color1 = 'FFFF00';
	// var color2 = 'FF0000';
	var color2 = '00FFFF';


	var hex = function(x) {
		x = x.toString(16);
		return (x.length == 1) ? '0' + x : x;
	};

	function scrollPercentage() {
		var body = document.body;
		var html = document.documentElement;
		var pageHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
		var viewportHeight = window.innerHeight;
		var scrollOffset = window.scrollY;
		var ratio = scrollOffset / (pageHeight - viewportHeight);
		var	percentage = (1 - ratio) * 100;
		var percentageInteger = Math.round(ratio * 100);
		var percentageDisplay = Math.round(ratio * 100).toString();
		console.log(percentageInteger);



		percentageDisplay = percentageDisplay.replace(/1/gi, '𝟭');
		percentageDisplay = percentageDisplay.replace(/2/gi, '𝟮');
		percentageDisplay = percentageDisplay.replace(/3/gi, '𝟯');
		percentageDisplay = percentageDisplay.replace(/4/gi, '𝟰');
		percentageDisplay = percentageDisplay.replace(/5/gi, '𝟱');
		percentageDisplay = percentageDisplay.replace(/6/gi, '𝟲');
		percentageDisplay = percentageDisplay.replace(/7/gi, '𝟳');
		percentageDisplay = percentageDisplay.replace(/8/gi, '𝟴');
		percentageDisplay = percentageDisplay.replace(/9/gi, '𝟵');
		percentageDisplay = percentageDisplay.replace(/0/gi, '𝟬');

		if (percentageInteger < 10) {
			document.title = '\u200B ' + percentageDisplay + "﹪ " + pageTitle;
		} else if (percentageInteger == 100) {
			document.title = "✅  " + pageTitle;
		}
		else {
			document.title = percentageDisplay + "﹪ " + pageTitle;
		}


		// document.title = Math.round(ratio * 100) + '% ' + pageTitle;
		// if (percentageDisplay == 0) {
		// 	document.title = '○ ' + pageTitle;
		// } else if (percentageDisplay > 0 && percentageDisplay <= 25) {
		// 	document.title = '◑ ' + pageTitle;
		// } else if (percentageDisplay > 25 && percentageDisplay <= 50) {
		// 	document.title = '◒ ' + pageTitle;
		// } else if (percentageDisplay > 50 && percentageDisplay <= 75) {
		// 	document.title = '◐ ' + pageTitle;
		// } else if (percentageDisplay > 75 && percentageDisplay < 100) {
		// 	document.title = '◓ ' + pageTitle;
		// } else {
		// 	document.title = '● ' + pageTitle;
		// }



		var r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio));
		var g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color2.substring(2,4), 16) * (1-ratio));
		var b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color2.substring(4,6), 16) * (1-ratio));
		var colorupdated = "%23" + (hex(r) + hex(g) + hex(b));
		var color = "white";

		//the color causes a collision when they get to 100% or whatever, causing flicker - when all white?

		// if (pageHeight <= viewportHeight) {
		// 	// percentage = 0; //just hide the whole thing rather than default to 100
		// } else {
		// 	document.getElementsByTagName('head')[0].appendChild(link);
		// 	link.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewbox=%220 0 40 40%22 width=%2240%22 height=%2240%22><image x=%2212%22 y=%2212%22 width=%2216%22 height=%2216%22 href=%22" + faviconEncoded + "%22/><circle cx=%2220%22 cy=%2220%22 r=%2216%22 fill=%22none%22 stroke=%22" + color + "%22 stroke-width=%228%22 stroke-dasharray=%22100%22 stroke-dashoffset=%22" + percentage + "%22 shape-rendering=%22geometricPrecision%22 transform=%22rotate(-90, 20, 20)%22/></svg>";
		// }
	}

	window.addEventListener('scroll', function() {
		removeIcons();
		scrollPercentage();

	});

	scrollPercentage();

})();
