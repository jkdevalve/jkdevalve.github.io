$(document).ready(function(){
	$('.dropdown').click(dropdownToggle);
});

function dropdownToggle(){
	$('#menu').toggleClass('dropdownmenu');
	$('#menu').toggleClass('hidden');
	$('.dropdown').toggleClass('grey');
	$('.nav').mouseleave(dropdownToggle);
}