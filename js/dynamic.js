$(document).ready(function() {
	$('.slider').superslides({
		slide_easing: 'easeInOutCubic',
		slide_speed: 800,
		pagination: true,
		hashchange: false,
		scrollabe: false,
		play: 7500
	});
	document.ontouchmove = function(e) {
		e.preventDefault();
	};
	$('.slider').hammer().on('swipeleft', function() {
		$(this).superslides('animate', 'next');
	});
	$('.slider').hammer().on('swiperight', function() {
		$(this).superslides('animate', 'prev');
	});
	$('.menu .nav li.sub > a').click(function() {
		$(this).parent('li').children('ul').slideDown(0);
		return false;
	});
	$('.menu .nav li ul li.back a').click(function() {
		$(this).parent('li').parent('ul').slideUp(0);
		return false;
	});
	$('body').append('<div class="fade"></div>');
	$('.quotes h6 a').click(function() {
		$('.fade, .popup').fadeIn(150);
		return false;
	});
	$('.fade').click(function() {
		$('.fade, .popup').fadeOut(150);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
		$('.fade, .popup').fadeOut(150);
	});
});
