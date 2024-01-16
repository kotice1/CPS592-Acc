// phone.js
$(document).ready(function() { // do this when the document is loaded
	$("#dialer").show(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
});

// Tab Buttons
$("#tb1").click(function() { // when "button_id" is clicked
	$("#dialer").show(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
});

$("#tb2").click(function() { // when "button_id" is clicked
	$("#dialer").hide(); // show the element with ID "element"
	$("#contact_list").show(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
});

$("#tb3").click(function() { // when "button_id" is clicked
	$("#dialer").hide(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").show(); // hide the element with ID "otherElement"
});

// Dial Buttons
// $("#dial1").click(function() { // when "button_id" is clicked
// 	$("#dialerText").value.append(1);
// });

// $("#dial2").click(function() { // when "button_id" is clicked
// 	$("#dialerText").value.append("2");
// });

// $("#dial3").click(function() { // when "button_id" is clicked
// 	$("#dialerText").append(3);
// });

// $("#dial4").click(function() { // when "button_id" is clicked
// 	$("#dialerText").append("4");
// });

// $("#dial5").click(function() { // when "button_id" is clicked
// 	$("#dialerText").appendTo("5");
// });

// $("#dial6").click(function() { // when "button_id" is clicked
// 	$("#dialerText").appendTo(6);
// });

// $("#dial7").click(function() { // when "button_id" is clicked
// 	$("#dialerText").append("7");
// });

function dialInput(number) {
    $("#dialerText").value = $("#dialerText").value.append(number);
}

