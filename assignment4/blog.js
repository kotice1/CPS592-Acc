// blog.js

// Accessibility Buttons
$("#fontUp").click(function() {
    let content = document.getElementById("content").style;
    content.fontSize = content.fontSize++;
});

$("#fontDown").click(function() {
	$('#paragraph').css('font-size', 12);
    $('#caption').css('font-size', 8);
});