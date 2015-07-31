$(document).ready(function(){

	$('.dropdown').click(dropdownToggle);

	if ($(window).width() < 658){
	$('.our-story').mouseenter(function() {
		var pos = $('.our-story').position();
		var width = ($('.our-story').outerWidth())/4;
		$('.about').css('left', (pos.left - width) + "px");
		$('.about').removeClass('hidden');
	});
	$('.nav').mouseleave(function() {
			$('.about').addClass('hidden');
		});
	};
});

var dropdownToggle = function(){
	$('.menu').toggleClass('dropdownmenu');
	$('.menu').toggleClass('hidden');
	$('.dropdown').toggleClass('grey');
	$('.nav').mouseleave(dropdownToggle);
};