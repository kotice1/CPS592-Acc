// blog.js

// Accessibility Buttons
$("#fontUp").click(function() {
    pSize = parseInt($('.paragraph').css('font-size'));
    pSize = pSize + 6;
	$('.paragraph').css('font-size', pSize);
    cSize = parseInt($('.caption').css('font-size'));
    cSize = cSize + 6;
    $('.caption').css('font-size', cSize);
});

$("#fontDown").click(function() {
    pSize = parseInt($('.paragraph').css('font-size'));
    pSize = pSize - 6;
	$('.paragraph').css('font-size', pSize);
    cSize = parseInt($('.caption').css('font-size'));
    cSize = cSize - 6;
    $('.caption').css('font-size', cSize);
});

function fontUp(){
    document.getElementById("paragraph").style.fontSize += 10;
}
function fontDown(){
    document.getElementById("paragraph").style.fontSize -= 10;
}