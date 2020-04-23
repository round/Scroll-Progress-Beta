(function() {
	console.log('content.js loaded');

	var icons = document.querySelectorAll("link[rel='shortcut icon'], link[rel='icon']");
	var iconsArray = Array.prototype.slice.call(icons);
	iconsArray.forEach(function(child){
	  child.parentNode.removeChild(child);
	});

	// function changeFavicon(){
  var link;
  link = document.createElement('link');
  // link.type = 'image/svg+xml';
  link.rel = 'icon';
  link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>' + '0' + '</text></svg>';
  document.getElementsByTagName('head')[0].appendChild(link);
// };

// changeFavicon();

function scrollPercentage() {

	var pageHeight = document.body.clientHeight;
	var viewportHeight = window.innerHeight;
	var scrollOffset = window.scrollY;
	var percentage;


	var color1 = '00FF00';
	var color2 = 'FF0000';
	var ratio = scrollOffset / (pageHeight - viewportHeight);
	var hex = function(x) {
	    x = x.toString(16);
	    return (x.length == 1) ? '0' + x : x;
	};

	var r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio));
	var g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color2.substring(2,4), 16) * (1-ratio));
	var b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color2.substring(4,6), 16) * (1-ratio));

	var color = "%23" + (hex(r) + hex(g) + hex(b));

	console.log(color);



	if (pageHeight <= viewportHeight) {
		percentage = 0; //just hide the whole thing rather than default to 100
	} else {
		// percentage = Math.round((scrollOffset / (pageHeight - viewportHeight)) * 100);
		percentage = (1 - (scrollOffset / (pageHeight - viewportHeight))) * 63;
	}

	// link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><text y=%221em%22 font-size=%2250%22>' + percentage + '</text></svg>';
	link.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewbox=%220 0 40 40%22 width=%2240%22 height=%2240%22><circle cx=%2220%22 cy=%2220%22 r=%2210%22 fill=%22none%22 stroke=%22" + color + "%22 stroke-width=%2220%22 stroke-dasharray=%2263%22 stroke-dashoffset=%22" + percentage + "%22 shape-rendering=%22geometricPrecision%22 transform=%22rotate(-90, 20, 20)%22/></svg>";
	console.log(percentage);
}

// <image href=%22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABLElEQVR4Ae3WAUdDURTA8bcCVTU0rWRCIKCvEK0QEAhDIPYVIloAARGiJ0FpAaFgTIIQggAqVMAUVEbt9EeY7L233fuuA/fwAw73v/c2u4EfP91ONahm4rg8OI8yQhzHCLGJIrJpHT6FS7QgXfpEDfPI2AZUIIZesGxzeBY3EAu3mDQNKOARYuEbJdOAaTxBLO1qB5yiTzPgRDtgR/MVNLGiGXCNnFbAK5YCRivgHAOaAW8o6gUAFxh1FfCDd7QSfgVrrgI+sI1nSIw6hl0EfGEBGwlP4QEFk4Ac7iARGpjDGK4gEe4xbvoatmI+3RkG//YW0YjY2zP6L2h7Ckdo/vvy1THbttePSoe9GmZsr2UjWMU+DlHGRIe9IZQQ4gDryKd+NU/e6e2a7sfPL/DhcQWYBGmaAAAAAElFTkSuQmCC%22 x=%220%22 y=%220%22 height=%2250px%22 width=%2250px%22/>

window.addEventListener('scroll', function() {
	scrollPercentage();
});

scrollPercentage();


})();
