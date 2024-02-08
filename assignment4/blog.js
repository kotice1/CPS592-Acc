// blog.js

// Accessibility Buttons
$("#fontUp").click(function() {
	$('.paragraph').css('font-size', 36);
    $('.caption').css('font-size', 30);
});

$("#fontDown").click(function() {
	$('#paragraph').css('font-size', 12);
    $('#caption').css('font-size', 8);
});