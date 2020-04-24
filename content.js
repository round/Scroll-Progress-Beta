(function() {
	console.log('content.js loaded');

	var icons = document.querySelectorAll("link[rel='shortcut icon'], link[rel='icon']");
	var iconsArray = Array.prototype.slice.call(icons);
	iconsArray.forEach(function(child){
	  child.parentNode.removeChild(child);
	});

  var link = document.createElement('link');
  link.rel = 'icon';
	link.type = 'image/svg';

	var color1 = '00FF00';
	var color2 = 'FF0000';

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
		var	percentage = (1 - ratio) * 63;

		var r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio));
		var g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color2.substring(2,4), 16) * (1-ratio));
		var b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color2.substring(4,6), 16) * (1-ratio));
		var color = "%23" + (hex(r) + hex(g) + hex(b));

		if (pageHeight <= viewportHeight) {
			// percentage = 0; //just hide the whole thing rather than default to 100
		} else {
			document.getElementsByTagName('head')[0].appendChild(link);
			link.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewbox=%220 0 40 40%22 width=%2240%22 height=%2240%22><circle cx=%2220%22 cy=%2220%22 r=%2210%22 fill=%22none%22 stroke=%22" + color + "%22 stroke-width=%2220%22 stroke-dasharray=%2263%22 stroke-dashoffset=%22" + percentage + "%22 shape-rendering=%22geometricPrecision%22 transform=%22rotate(-90, 20, 20)%22/></svg>";
		}
	}

	window.addEventListener('scroll', function() {
		scrollPercentage();
	});

	scrollPercentage();

})();
