(function() {
	console.log('content.js loaded');

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
	if (pageHeight <= viewportHeight) {
		percentage = 100;
	} else {
		percentage = Math.round((scrollOffset / (pageHeight - viewportHeight)) * 100);
	}

	link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><text y=%221em%22 font-size=%2250%22>' + percentage + '</text></svg>';
	console.log(percentage);
}

window.addEventListener('scroll', function() {
	scrollPercentage();
});

scrollPercentage();


})();
