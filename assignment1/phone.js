// phone.js
$(document).ready(function() { // do this when the document is loaded
	$("#dialer").show(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
});

$("#button_tb1").click(function() { // when "button_id" is clicked
	$("#dialer").show(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
});

$("tb2").click(function() { // when "button_id" is clicked
	$("#dialer").hide(); // show the element with ID "element"
	$("#contact_list").show(); // hide the element with ID "otherElement"
    $("#newContact").hide(); // hide the element with ID "otherElement"
});

$("#tb3").click(function() { // when "button_id" is clicked
	$("#dialer").hide(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
    $("#newContact").show(); // hide the element with ID "otherElement"
});
