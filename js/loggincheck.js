// alert('hello') // test connection

"use strict";
var $ = function(id) { return document.getElementById(id); };


if(!localStorage.getItem("isLoggedIn", false)){
    // $("registration_header").innerHTML = "YOU MUST LOG IN TO VIEW THIS PAGE!" ;
    $("spending").style.display = 'none'; 
    $("accountPage").style.display = 'none'; 
    

} else {
    //$("registration_header").innerHTML = "you are logged in!!!!" ;  
}





window.onload = function () {
    
    if(!localStorage.getItem("isLoggedIn", false)){
        // $("registration_header").innerHTML = "YOU MUST LOG IN TO VIEW THIS PAGE!" ;
        $("spending").style.display = 'none'; 
        $("accountPage").style.display = 'none'; 
    
    }
    
};
            