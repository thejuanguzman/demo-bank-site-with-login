"use strict";
var $ = function(id) { return document.getElementById(id); };
var valideEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var users = [] ;
var storage = localStorage.getItem("users") || null;
    users = JSON.parse(storage) || [];

var userEmail = localStorage.getItem('userEmail');
var userPassword = localStorage.getItem('userPassword');
//var isLoggedIn = localSotrage.getItem('isLoggedIn');

var transactionTotals;

// call to refresh the page and data chart after button clicks
function refreshPage(){
    window.location.reload();
} 


function addDepostit(){ // updates the user.transactions array by adding new deposit transaction


    // // get values for user entries   

    var description = $("description").value || "Transaction"; // if null description is generic transaction
    var type = 'Credit';
    var amount = $("amount").value || 0; // if null ammount is 0
    type = type.toLowerCase();

    
    amount = parseFloat(amount)
    // if (type == "debit"){
    //     amount = amount - (amount *2);
    // }

    users.forEach(function (user) { // run foreach on array to check values keys
        // console.log(user.userName + ' : ' +user.password); testing output.
        // using class of transactions
        if (userEmail == user.userName && userPassword == user.password  ){
            var transactionId = Date.now();  
            
            class Transaction {
                constructor(transactionId, description, type, amount){
                    this.transactionId = transactionId;
                    this.date = new Date().toUTCString(),
                    this.description = description;
                    this.type = type;
                    this.amount = amount; 
                }
                creatTransactionArray(){
                    return {transactionId: transactionId, date: this.date, description : description, type : type, amount : amount }
                }
            }

            var newEntry = new Transaction(transactionId,description,type,amount);
            user.transactions.push(newEntry.creatTransactionArray());
            localStorage.setItem("users", JSON.stringify(users));
            // alert('congratulations you logged in');
            //window.open('account_page.html');

            $("registration_header").innerHTML = "This will be your account info" ;  
        } else {
            console.log('No such user - nothing updated')
        }

    });

 
    
    refreshPage()
}

function addDebit(){ // updates the user.transactions array by adding new debit transaction


    // // get values for user entries   

    var description = $("description").value || "Transaction";// if null description is generic transaction
    var type = 'debit';
    var amount = $("amount").value || 0; // if null ammount is 0
    amount = parseFloat(amount)
    type = type.toLowerCase();
    

    if (type == "debit"){
        amount = amount - (amount * 2);
    }

    users.forEach(function (user) { // run foreach on array to check values keys
        // console.log(user.userName + ' : ' +user.password); testing output.
        // using class of transactions
        if (userEmail == user.userName && userPassword == user.password  ){
            var transactionId = Date.now();  
            
            class Transaction {
                constructor(transactionId, description, type, amount){
                    this.transactionId = transactionId;
                    this.date = new Date().toUTCString(),
                    this.description = description;
                    this.type = type;
                    this.amount = amount; 
                }
                creatTransactionArray(){
                    return {transactionId: transactionId, date: this.date, description : description, type : type, amount : amount }
                }
            }

            var newEntry = new Transaction(transactionId,description,type,amount);
            user.transactions.push(newEntry.creatTransactionArray());
            localStorage.setItem("users", JSON.stringify(users));
            // alert('congratulations you logged in');
            //window.open('account_page.html');

            $("registration_header").innerHTML = "This will be your account info" ;  
        } else {
            console.log('No such user - nothing updated')
        }

    });

 
    
    refreshPage()
}

function loadJSON() {
	var data_file = "db.json";
  
    var description = $("description").value;
    // var type = $("type").value;
    var amount = $("amount").value;
    var runningTotal = [];


	
    var http_request = new XMLHttpRequest();
	try{
	   // Opera 8.0+, Firefox, Chrome, Safari
	   http_request = new XMLHttpRequest();
	}catch (e) {
	   // Internet Explorer Browsers
	   try{
		  http_request = new ActiveXObject("Msxml2.XMLHTTP");
			
	   }catch (e) {
		
		  try{
			 http_request = new ActiveXObject("Microsoft.XMLHTTP");
		  }catch (e) {
			 // Something went wrong
			 alert("Your browser broke!");
			 return false;
		  }
			
	   }
	}
	
	http_request.onreadystatechange = function() {

        
	
	   if (http_request.readyState == 4  ) {
		  // Javascript function JSON.parse to parse JSON data
		  var jsonObj = JSON.parse(http_request.responseText);
         //alert(jsonObj.transactions[0].description);
         var newArray = jsonObj;
        //  alert(newArray.transactions[0].description);
        //  alert(newArray.transactions[0].date)
        newArray.transactions.forEach(e => {
            runningTotal.push(parseFloat(e.amount))
            $("registration_info").innerHTML += `
            <tr>
              <td>${e.id}<br></td>
              <td>${e.description}<br></td>
              <td>${e.amount}<br></td>
              <td>${e.date}<br></td>
              
            </tr>
            
          </table>
          `
        
                         

              
            // });
            console.log('-------------------');
        });
          



        //   var newArray = jsonObj;
            // var html = "";
            
            
                     
            
            // newArray.forEach((e) => {

            //     runningTotal.push(parseFloat(e.amount))
            //     // textTotal= textTotal + runningAmount;
                
            //     $("registration_info").innerHTML += `
            //     <tr>
            //       <td>${newArray.transactions[e].description}<br></td>
            //       <td>${e.type}<br></td>
            //       <td>${e.amount}<br></td>
            //       <td>${newArray.transactions[0].date}<br></td>
            //     </tr>
                
            //   </table>
            //   `
            //   var finalTotals = runningTotal.reduce(function(acc, val) { return acc + val; }, 0);
            //   // alert(finalTotals);

            //   $("accountTotalTable").innerHTML += `
            //   <tr>
            //     <td>$${finalTotals} </td>
                
            //   </tr>
              
            // </table>
            // `
            // });

	   }
	}
	
	http_request.open("GET", data_file, true);
	http_request.send();
 }


function renderAccountInfo(){
    
  
    var description = $("description").value;
    // var type = $("type").value;
    var amount = $("amount").value;
    var runningTotal = [];

    users.forEach(function (user) { // run foreach on array to check values keys
        // console.log(user.userName + ' : ' +user.password); testing output.
        // using class of transactions
        if (userEmail == user.userName && userPassword == user.password  ){
            
            
            var newArray = user.transactions;
            var html = "";
            
            // var i, item;
            // for (i = 0; i < user.transactions.length; i++) {
            //     for (item in user.transactions[i]) {
            //         $("registration_header").innerHTML = item + ": " + newArray[i][item] + "<br>"; 
            //         //document.write(item + ": " + newArray[i][item] + "<br>");
            //     }
            //   }
            // newArray.forEach(myFunction);
            //  function myFunction(item, key) {
            //    for (var key in item) {
                
            //         html = html.concat("<div>" + [key] + " : " + item[key] + "</div>");
            //         // html = html.concat([key] + " : " + item[key]);
            //         // html = html.concat("</p>");
            //     }
    
            //     //$("registration_info").innerHTML = html; 

            //     // var i, item;
            //     // for (i = 0; i < user.transactions.length; i++) {
            //     //     for (item in user.transactions[i]) {
            //     //         $("registration_header").innerHTML = item + ": " + newArray[i][item] + "<br>"; 
            //     //         //document.write(item + ": " + newArray[i][item] + "<br>");
            //     //     }
            //     //   }
    
               

                    
            //    // $("registration_info").append([key] + " : " + item[key]  ); 
                    
            //      //$("registration_header").append([key] + " : " + item[key]  ); 
                 
               
            //  }

            //  $("registration_info").innerHTML = html; 

            // newArray.forEach(tran => {
            //     for (let key in tran) {
            //         $("registration_info").innerHTML += `${key} : ${tran[key]} </br>`;
            //     }
            // });
            
            newArray.forEach((e) => {

                runningTotal.push(parseFloat(e.amount))
                // textTotal= textTotal + runningAmount;
                
                $("registration_info").innerHTML += `
                <tr>
                  <td>${e.description}<br></td>
                  <td>${e.type}<br></td>
                  <td>${e.amount}<br></td>
                  <td>${e.date}<br></td>
                </tr>
                
              </table>
              `
   
            });

        } else {
            console.log('No such user - nothing updated')
        }
        
        var finalTotals = runningTotal.reduce(function(acc, val) { return acc + val; }, 0);
       // alert(finalTotals);

       if(!localStorage.getItem("isLoggedIn", false)){
        $("registration_header").innerHTML = "YOU MUST LOG IN TO VIEW ACCOUNT INFO" ;  

    } else {
        $("accountTotalTable").innerHTML += `
                <tr>
                  <td>$${finalTotals} </td>
                  
                </tr>
                
              </table>
              `
    }

   
    });

   
}




window.onload = function() {
    //renderAccountInfo();
    loadJSON();
       
    //$("update").onclick = addTransaction; // not used but this is universal update button
    $("deposit").onclick = addDepostit;
    $("withdraw").onclick = addDebit;
    
    // $("update").onclick = renderAccountInfo;
    $("description").focus();
};


         