// blog.js

// Accessibility Buttons
$("#fontUp").click(function() {
    // let content = document.getElementById("content").style;
    // content.fontSize = content.fontSize++;
	$('.paragraph').css('font-size', '36');
    $('.caption').css('font-size', '30');
});

$("#fontDown").click(function() {
	$('#paragraph').css('font-size', '12');
    $('#caption').css('font-size', '8');
});