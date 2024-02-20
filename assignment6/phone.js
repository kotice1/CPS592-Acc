// phone.js
$(document).ready(function() { // do this when the document is loaded
	$("#dialer").show(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
    $("#test-gestures").hide();
});

// Tab Buttons
$("#tb1").click(function() { // when "button_id" is clicked
	$("#dialer").show(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
    $("#test-gestures").hide();
});

$("#tb2").click(function() { // when "button_id" is clicked
	$("#dialer").hide(); // show the element with ID "element"
	$("#contact_list").show(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
    $("#test-gestures").hide();
});

$("#tb3").click(function() { // when "button_id" is clicked
	$("#dialer").hide(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").show(); // hide the element with ID "otherElement"
    $("#test-gestures").hide();
});
$("#tb4").click(function() { // when "button_id" is clicked
	$("#dialer").hide(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
    $("#test-gestures").show();
});

// Dial Buttons
function dialInput(number) {
    if (number === 'clear') {
        document.getElementById('dialerText').value = '';
    }
    else if (number === 'dial') {
        document.getElementById('dialerText').value = 'Ringing ' + document.getElementById('dialerText').value + '...';
    }
    else {
        document.getElementById('dialerText').value = document.getElementById('dialerText').value + number;
    }
}

var list = document.getElementById('contact_list').innerHTML;
// Add to Contact List
function addContact() {
    var name = document.getElementById('name').value + ': ';
    var number = document.getElementById('number').value + '<br>';
    // console.log(document.getElementById('contact_list').innerHTML);
    // document.getElementById('contact_list').innerHTML = document.getElementById('contact_list').innerHTML + name + number;
    // console.log(document.getElementById('contact_list').innerHTML);

    document.getElementById('contact_list').innerHTML += name + number;
    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
}

var downX = 0;
var downY = 0;
var upX = 0;
var upY = 0;
// Gesture Area Testing
$("#test-area").mousedown(function(event) {
	document.getElementById('test-area').innerHTML = "Mouse Down";
    downX = event.pageX;
    downY = event.pageY;
});
$("#test-area").mouseup(function(event) { 
    upX = event.pageX;
    upY = event.pageY;
    distX = Math.abs(downX - upX);
    distY = Math.abs(downY - upY);
    if (distX > distY) {
        if (downX < upX) { //swipe right
            document.getElementById('test-area').innerHTML = "Swipe Right";
        }
        else if (downX > upX) { //swipe left
            document.getElementById('test-area').innerHTML = "Swipe Left";
        }
        else {
            document.getElementById('test-area').innerHTML = "Mouse Up";
        }
    }
    else {
        if (downY < upY) { //swipe down
            document.getElementById('test-area').innerHTML = "Swipe Down";
        }
        else if (downY > upY) { // swipe up
            document.getElementById('test-area').innerHTML = "Swipe Up";
        }
        else {
            document.getElementById('test-area').innerHTML = "Mouse Up";
        }
    }
});

