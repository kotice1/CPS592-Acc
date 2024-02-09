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

$("#imageUp").click(function() {
    img = parseInt($('img').css('width'));
    img += 10;
    $('img').css('width', img);
});

$("#imageDown").click(function() {
    img = parseInt($('img').css('width'));
    img -= 10;
    $('img').css('width', img);
});

$("#comment-submit").click(function() {
    let msg = document.getElementById("comment-form").value;
    document.getElementById("comment-display").innerHTML += msg;
});