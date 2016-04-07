$(document).ready(function(){

	$('.dropdown').click(dropdownToggle);

	
	$('.our-story').mouseenter(function() {
		var pos = $('.our-story').position();
		var width = ($('.our-story').outerWidth())/4;
		$('.about').css('left', (pos.left - width) + "px");
		$('.about').removeClass('hidden');
	});
	$('.nav').mouseleave(function() {
			$('.about').addClass('hidden');
		});

	$(".statement, .statement-support").mouseenter(function() {
		
		var box = this.id;
		console.log("#"+box + " .hovertext");
		$("#"+box + " .hovertext").show();
	});
	$(".statement, .statement-support").mouseleave(function() {
		var box = this.id;
		$("#"+box + " .hovertext").hide();
	});

});

var dropdownToggle = function(){
	$('.menu').toggleClass('dropdownmenu');
	$('.menu').toggleClass('hidden');
	$('.dropdown').toggleClass('grey');
	$('.nav').mouseleave(dropdownToggle);
};