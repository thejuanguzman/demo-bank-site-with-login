"use strict";
var $ = function(id) { return document.getElementById(id); };
//var isLoggedIn = false;

var valideEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var users = [] ;
var storage = localStorage.getItem("users") || null;
    users = JSON.parse(storage) || [];


function accountLogin(){
    var header = "";
    var html = "";
    var msg = "Please review your entries";


    // get values for user entries   
    var password = $("password").value;
    var email_address = $("email_address").value;
      
    $("account_header").firstChild.nodeValue = header;

    users.forEach(function (user) { // run foreach on array to check values keys
        // console.log(user.userName + ' : ' +user.password); testing output.
        if (email_address == user.userName && password == user.password){
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userEmail",email_address);
        localStorage.setItem("userPassword",password);
        alert('congratulations you logged in');
        window.open('account_page.html');
        } else {
            header = msg;
        }

    });
    
    if (header == msg) {     // error message
        html = html + "<tr><td>" +  "Your username or password did not match. Please try again." + "</td></tr>";      
        $("account_info").innerHTML = html;
    } else {   
        $("account_info").innerHTML = "You are logged in as " + testEmail;    
    }
}


function accountLoggout(){

    //localStorage.setItem("isLoggedIn", false)
    localStorage.removeItem("isLoggedIn");
    localStorage.setItem("userEmail","");
    localStorage.setItem("userPassword", "");


}
    

window.onload = function() {
    // accountLoginPrompt();
    $("login").onclick = accountLogin;
    $("logout").onclick= accountLoggout;
    // $("register").onclick = processEntries;
    // $("reset_form").onclick = resetForm;    
    $("email_address").focus();
};