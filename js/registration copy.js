"use strict";
var $ = function(id) { return document.getElementById(id); };
var users = [] ; // empty users array 
var valideEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



// local storage stays in browser after browser is closed // using to test credentials before storing in JSON
localStorage.setItem("userEmail","");
localStorage.setItem("userPassword", "")


var userEmail = localStorage.getItem('userEmail');
var userPassword = localStorage.getItem('userPassword');

var processEntries = function() {
    
	var isValid = true;
    var validEmail = true;
    var passwordConfirmed = true;
	
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";  
    var msg = "Please review your entries and complete all required fields";

    var passwordMsgErr = "<span>Passwords do not match</span>"; 
    var emailMsgErr = "<span>Email incorrectly formatted</span>";

    var storage = localStorage.getItem("users") || null; // retrieve users array ** this missing was causing the array to be ovewritten each entry
    users = JSON.parse(storage) || [];

    //

	// get values for user entries   
    var password = $("password").value;
    var confirm_password = $("confirm_password").value;
    var email_address = $("email_address").value;


    // check user entries for validity
    if (email_address == "") {
        header = msg;
        email_address = required; 
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
        validEmail = false;
    } else if(!email_address.match(valideEmail)){ // validate regex email
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is not formatted correctly.";
        isValid = false;
        validEmail = false;
        email_address = emailMsgErr;
	}else {
		$("email_address").nextElementSibling.firstChild.nodeValue = "";	
        localStorage.setItem("userEmail",email_address);
        console.log(email_address); 
        
	}
 

    if (password == "") {
        header = msg;
        password = required; 
        $("password").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    } else {
		$("password").nextElementSibling.firstChild.nodeValue = "";	
	}


	if (confirm_password == "") {
        header = msg;
        confirm_password = required; 
        $("confirm_password").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
    } else if (confirm_password !== password){ // make sure both passwords match. 
        $("confirm_password").nextElementSibling.firstChild.nodeValue = "The passwords do not match.";
        confirm_password = passwordMsgErr; 
        passwordConfirmed = false;
		isValid = false;
    } else {
		$("confirm_password").nextElementSibling.firstChild.nodeValue = "";	 
        localStorage.setItem("userPassword",password);
        console.log(password);     
	}

    // added this if statement to make sure form info would display capturing mismatched passwords + invalid email and would not submit the combination
    if (validEmail == false || passwordConfirmed == false){ // cant submit with incorrectly formatted email or non matching passwords
        header = msg;
        password ;
        confirm_password ; 
        isValid = false;
    }


    $("registration_header").firstChild.nodeValue = header;
    if (header == msg) {     
        html = html + "<tr><td>Email Address:</td><td>" + email_address + "</td></tr>";
        html = html + "<tr><td>password:</td><td>" + password + "</td></tr>"; // *** Maybe instead of displaing the captured infor it should display ****
        html = html + "<tr><td>Confirm Password:</td><td>" + confirm_password + "</td></tr>";// *** Maybe instead of displaing the captured infor it should display ****

        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "NOT DISPLAYING DATA";
        
    }

	if (isValid == true) {
        users.push( {userName: email_address, password: password, transactions: [] } ); // push new user object to array
        localStorage.setItem("users", JSON.stringify(users));

        $("registration_form").submit();
	}
};



var resetForm = function() {
    $("registration_form").reset();
    $("email_address").focus();

	$("password").nextElementSibling.firstChild.nodeValue = "*";
	$("confirm_password").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").nextElementSibling.firstChild.nodeValue = "*";

};


window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();
};