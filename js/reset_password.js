"use strict";
var $ = function(id) { return document.getElementById(id); };

var valideEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var users = [] ;
var storage = localStorage.getItem("users") || null;
    users = JSON.parse(storage) || [];


function accountLogin(){
    
    var html = "";
    var msg = "Invalid Credentials";
    var msg2 = "Password changed";
    var header = "" ;

    // get values for user entries   
    var password = $("password").value;
    var email_address = $("email_address").value;
    var resetPassword = $("resetPassword").value;
      
    $("account_header").firstChild.nodeValue = header;

    users.forEach(function (user) { // run foreach on array to check values keys
        // console.log(user.userName + ' : ' +user.password); testing output.
        if (email_address == user.userName && password == user.password){
            user.password = resetPassword;

            localStorage.setItem("users", JSON.stringify(users));
            header = msg2;
        } 
        
    });
    
    if (header == "") {     // error message
        html = html + "<tr><td>" +  "Your username or password did not match. Please try again." + "</td></tr>";      
        $("account_info").innerHTML = html;
    } else if (header == msg2) {     // error message
        html = html + "<tr><td>" +  "Your Password Was changed!" + "</td></tr>";      
        $("account_info").innerHTML = html;
    
    }else{   
        html = html + "<tr><td>" +  "" + "</td></tr>";      
        $("account_info").innerHTML = html;  
    }
}


window.onload = function() {
    $("login").onclick = accountLogin;
 
    $("email_address").focus();
};