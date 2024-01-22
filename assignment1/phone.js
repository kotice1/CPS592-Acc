// phone.js
$(document).ready(function() { // do this when the document is loaded
	$("#dialer").hide(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
    $("#test-gestures").show();
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

// Gesture Area Testing
$("#test-area").onMouseDown(function() { // when "button_id" is clicked
	document.getElementById('test-area').innerHTML = "Mouse Down";
});
$("#test-area").onMouseUp(function() { // when "button_id" is clicked
	document.getElementById('test-area').innerHTML = "Mouse Up";
});
$("#test-area").onMouseMove(function() { // when "button_id" is clicked
	document.getElementById('test-area').innerHTML = "";
});
