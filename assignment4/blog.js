// blog.js

// Accessibility Buttons
$("#fontUp").click(function() {
    document.getElementById("paragraph").style.fontSize += '10';
    // content.fontSize = content.fontSize + 10;
    // console.log(document.getElementById("paragraph").style.fontSize);
	// $('.paragraph').css('font-size', 36);
    // $('.caption').css('font-size', 30);
});

$("#fontDown").click(function() {
    // document.getElementById("paragraph").style.fontSize += 10;
    // console.log(document.getElementById("paragraph").style.fontSize);
    // content.fontSize = content.fontSize++;
    let pClass = document.getElementsByClassName('paragraph').style.fontSize + 10;
    let cClass = document.getElementsByClassName('caption').style.fontSize - 10;
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
	$('.paragraph').css('font-size', pClass);
    $('.caption').css('font-size', cClass);
});

function fontUp(){
    document.getElementById("paragraph").style.fontSize += 10;
}
function fontDown(){
    document.getElementById("paragraph").style.fontSize -= 10;
}