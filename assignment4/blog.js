// blog.js

// Accessibility Buttons
$("#fontUp").click(function() {
    let content = document.getElementById("paragraph").style;
    content.fontSize = content.fontSize + 10;
    console.log(document.getElementById("paragraph").style.fontSize);
	// $('.paragraph').css('font-size', '36');
    // $('.caption').css('font-size', '30');
});

$("#fontDown").click(function() {
    document.getElementById("paragraph").style.fontSize += 10;
    console.log(document.getElementById("paragraph").style.fontSize);
    // content.fontSize = content.fontSize++;
	// $('#paragraph').css('font-size', '12');
    // $('#caption').css('font-size', '8');
});

function fontUp(){
    document.getElementById("paragraph").style.fontSize += 10;
}
function fontDown(){
    document.getElementById("paragraph").style.fontSize -= 10;
}