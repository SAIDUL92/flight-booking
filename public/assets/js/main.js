(function($) {
	'use strict';
	$('select').niceSelect();

	// STICKY ACTIVE
	var activeSticky = $('#active-sticky'),
		winD = $(window);
	winD.on('scroll', function() {
		var scroll = $(window).scrollTop(),
			isSticky = activeSticky;
		if (scroll < 1) {
			isSticky.removeClass('is-sticky');
		} else {
			isSticky.addClass('is-sticky');
		}
	});
})(jQuery);
