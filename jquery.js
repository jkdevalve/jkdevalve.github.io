$(document).ready(function(){

	$('.dropdown').click(dropdownToggle);
	$(window).scroll(function(){
		alert("hello");
	});

});

function dropdownToggle(){
	$('#menu').toggleClass('dropdownmenu');
	$('#menu').toggleClass('hidden');
	$('.dropdown').toggleClass('grey');
	$('.nav').mouseleave(dropdownToggle);
};