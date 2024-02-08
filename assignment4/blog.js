// blog.js

// Accessibility Buttons
$("#fontUp").click(function() {
    // let content = document.getElementById("paragraph").style;
    // content.fontSize = content.fontSize + 10;
    // console.log(document.getElementById("paragraph").style.fontSize);
	$('.paragraph').css('font-size', 36);
    $('.caption').css('font-size', 30);
});

$("#fontDown").click(function() {
    // document.getElementById("paragraph").style.fontSize += 10;
    // console.log(document.getElementById("paragraph").style.fontSize);
    // content.fontSize = content.fontSize++;
    let pClass = document.getElementsByClassName('paragraph');
    let cClass = document.getElementsByClassName('caption');
    pSize = 18;
    for (var e in pClass){
        if (e == fontSize){
            pSize = e;
        }
    }
    for (var e in cClass){
        if (e == fontSize){
            cSize = e;
        }
    }
    cSize++;
    pSize++;
	$('.paragraph').css('font-size', pSize);
    $('.caption').css('font-size', cSize);
});

function fontUp(){
    document.getElementById("paragraph").style.fontSize += 10;
}
function fontDown(){
    document.getElementById("paragraph").style.fontSize -= 10;
}