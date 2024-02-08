// blog.js

// Accessibility Buttons
$("#fontUp").click(function() {
    // document.getElementById("paragraph").style.fontSize += 10;
    // content.fontSize = content.fontSize + 10;
    // console.log(document.getElementById("paragraph").style.fontSize);
	// $('.paragraph').css('font-size', 36);
    // $('.caption').css('font-size', 30);
    pSize = parseInt($('.paragraph').css('font-size'));
    pSize = newSize + 6;
	$('.paragraph').css('font-size', pSize);
    cSize = parseInt($('.caption').css('font-size'));
    cSize = cSize + 6;
    $('.caption').css('font-size', cSize);
});

$("#fontDown").click(function() {
    // let size = document.getElementById("paragraph").style.fontSize;
    // console.log(document.getElementById("paragraph").style.fontSize);
    // content.fontSize = content.fontSize++;
    // let pClass = document.getElementsByClassName('paragraph').style.fontSize + 10;
    // let cClass = document.getElementsByClassName('caption').style.fontSize - 10;
    // pSize = 18;
    // cSize = 15;
    // for (var e in pClass){
    //     e.style.fontSize += 1
    // }
    // for (var e in cClass){
    //     if (e == fontSize){
    //         cSize = e;
    //     }
    // }
    // cSize++;
    // pSize++;
    pSize = parseInt($('.paragraph').css('font-size'));
    pSize = newSize - 6;
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