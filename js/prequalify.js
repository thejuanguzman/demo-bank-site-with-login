"use strict";
var $ = function(id) { return document.getElementById(id); };

var valideEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var validZipCode = /^\d{5}(?:[- ]?\d{4})?$/;

var processEntries = function() {
	var isValid = true;
	
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";  
    var msg = "Please review your entries and complete all required fields";

	// get values for user entries   
    var email = $("email_address").value;
    var confirmEmail = $("re_enter_email").value;
    var firstName = $("first_name").value;
    var lastName = $("last_name").value;
    var city = $("city").value;
    var state = $("state").value;
    var zipCode = $("zip_code").value;
    var grossIncome = $("gross_income").value;
    var socialSec = $("social").value;
    var terms = $("terms").checked;

    var notQualify = "Sorry, but you do not qualify for a loan at this time";
    var incomeLimit = 45000; // set min income threshold
    grossIncome == parseInt(grossIncome); // convert grossIncome to interger number

    // check user entries for validity
    if (email == "") {
        header = msg;
        email = required; 
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    } else if(!email.match(valideEmail)){ // validate regex email
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is not formatted correctly.";
        isValid = false;
	}else {
		$("email_address").nextElementSibling.firstChild.nodeValue = "";	
	}

	if (confirmEmail == "") {
        header = msg;
        confirmEmail = required; 
        $("re_enter_email").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    } else if (confirmEmail !== email){ // make sure both emails match. validadion of regex done on first email
        $("re_enter_email").nextElementSibling.firstChild.nodeValue = "This email must match the first email entry";
		isValid = false;
    } else {
		$("re_enter_email").nextElementSibling.firstChild.nodeValue = "";	
	}
 
    if (firstName == "") {
        header = msg;
        firstName = required; 
        $("first_name").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    }
	else {
		$("first_name").nextElementSibling.firstChild.nodeValue = "";	
	}
	if (lastName == "") {
        header = msg;
        lastName = required; 
        $("last_name").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    } else {
		$("last_name").nextElementSibling.firstChild.nodeValue = "";	
	}

    if (city == "") {
        header = msg;
        city = required; 
        $("city").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    }
	else {
		$("city").nextElementSibling.firstChild.nodeValue = "";	
	}

    if (state == "") {
        header = msg;
        state = required; 
        $("state").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    } else {
		$("state").nextElementSibling.firstChild.nodeValue = "";	
	}

    if (zipCode == "") {
        header = msg;
        zipCode = required;
        $("zip_code").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    } else if (!zipCode.match(validZipCode)){ // validate zip code
        $("zip_code").nextElementSibling.firstChild.nodeValue = "Please enter a valid zip code.";
        isValid = false;
    }	else {
		$("zip_code").nextElementSibling.firstChild.nodeValue = "";	
	}

    if (grossIncome == "") {
        header = msg;
        grossIncome = required;
        $("gross_income").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    } else if (grossIncome < incomeLimit){
        $("gross_income").nextElementSibling.firstChild.nodeValue = "Sorry, but you do not qualify for a loan at this time";
        isValid = true;
        
    } else if (grossIncome >= incomeLimit){
        $("gross_income").nextElementSibling.firstChild.nodeValue = "Congratulations, Your are prequalified for a loan. A representative will contact you soon";
        isValid = true;
    } else {
		$("gross_income").nextElementSibling.firstChild.nodeValue = "";	
	}

    if (socialSec == "") {
        header = msg;
        socialSec = required;
        $("social").nextElementSibling.firstChild.nodeValue = "This field is required.";
		socialSec = required;         
        header = msg;
        isValid = false;
    } else {
		$("social").nextElementSibling.firstChild.nodeValue = "";	
	}

    if (terms == false) {
        $("terms").nextElementSibling.firstChild.nodeValue = "This box must be checked.";
		header = msg;
        terms = required;
        isValid = false;

    } else {
		$("terms").nextElementSibling.firstChild.nodeValue = "";	
	}

 


    $("application_header").firstChild.nodeValue = header;
    if (header == msg) {     
        html = html + "<tr><td>Email Address:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>Re-enter Email Address:</td><td>" + confirmEmail + "</td></tr>";
        html = html + "<tr><td>First Name:</td><td>" + firstName + "</td></tr>";
        html = html + "<tr><td>Last Name:</td><td>" + lastName + "</td></tr>";
        html = html + "<tr><td>City:</td><td>" + city + "</td></tr>";
        html = html + "<tr><td>State:</td><td>" + state + "</td></tr>";
        html = html + "<tr><td>Zip Code:</td><td>" + zipCode + "</td></tr>";
        html = html + "<tr><td>Gross Income:</td><td>" + grossIncome + "</td></tr>";
        html = html + "<tr><td>EmaLast 4 digits of SSN:</td><td>" + socialSec + "</td></tr>";
        html = html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";

        $("application_info").innerHTML = html;
    } else {
        $("application_info").innerHTML = "";
        
    }


    if (isValid == true && grossIncome >= incomeLimit) {
		alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon")
	}

    if (grossIncome != "" && grossIncome < 45000) {
		alert(notQualify)
	}
	if (isValid == true) {
		$("application_form").submit();
	}

    
};

var resetForm = function() {
    $("application_form").reset();
    $("application_info").innerHTML = "";
    $("email_address").focus();

	$("email_address").nextElementSibling.firstChild.nodeValue = "*";
	$("re_enter_email").nextElementSibling.firstChild.nodeValue = "*";	
	$("first_name").nextElementSibling.firstChild.nodeValue = "*";	
    $("last_name").nextElementSibling.firstChild.nodeValue = "*";	
    $("city").nextElementSibling.firstChild.nodeValue = "*";	
    $("state").nextElementSibling.firstChild.nodeValue = "*";	
    $("zip_code").nextElementSibling.firstChild.nodeValue = "*";	
    $("gross_income").nextElementSibling.firstChild.nodeValue = "*";	
    $("social").nextElementSibling.firstChild.nodeValue = "*";	
	$("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus();
};

window.onload = function() {
    $("apply").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();
};