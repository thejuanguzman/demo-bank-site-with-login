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

// function addTransaction(){ // not used universal button updates the user.transactions array by adding new item
//     // var html = "";
//     // var msg = "Invalid Credentials";
//     // var msg2 = "Password changed";
//     // var header = "" ;

//     // // get values for user entries   

//     var description = $("description").value;
//     var type = $("type").value;
//     var amount = $("amount").value;
//     amount = parseFloat(amount)
//     type = type.toLowerCase();

//     if (type == "debit"){
//         amount = amount - (amount *2);
//     }

//     users.forEach(function (user) { // run foreach on array to check values keys
//         // console.log(user.userName + ' : ' +user.password); testing output.
//         // using class of transactions
//         if (userEmail == user.userName && userPassword == user.password  ){
//             var transactionId = Date.now();  
            
//             class Transaction {
//                 constructor(transactionId, description, type, amount){
//                     this.transactionId = transactionId;
//                     this.description = description;
//                     this.type = type;
//                     this.amount = amount; 
//                 }
//                 creatTransactionArray(){
//                     return {transactionId: transactionId, description : description, type : type, amount : amount }
//                 }
//             }

//             var newEntry = new Transaction(transactionId,description,type,amount);
//             user.transactions.push(newEntry.creatTransactionArray());
//             localStorage.setItem("users", JSON.stringify(users));
//             // alert('congratulations you logged in');
//             //window.open('account_page.html');

//             $("registration_header").innerHTML = "This will be your account info" ;  
//         } else {
//             console.log('No such user - nothing updated')
//         }

//         // working approach with objects
//         // if (userEmail == user.userName && userPassword == user.password  ){
//         //     var transactionId = Date.now();           
//         //     user.transactions.push({transactionId: transactionId, description : description, type : type, amount : amount });
//         //     localStorage.setItem("users", JSON.stringify(users));
//         //     // alert('congratulations you logged in');
//         //     //window.open('account_page.html');
//         // } else {
//         //     console.log('No such user - nothing updated')
//         // }

//     });

//     // users.forEach(function (user) { // run foreach on array to check values keys
//     //     // console.log(user.userName + ' : ' +user.password); testing output.
//     //     var transactionId = Date.now();    
//     //     // localStorage.getItem =user.transactions;
        
//     //     user.transactions.push({transactionId: transactionId, description : description, type : type, amount : amount });
//     //    // newTransactions.push(user.transactions)
//     //    // alert(newTransactions);
//     //     localStorage.setItem("users", JSON.stringify(users));
        
//     // });
    
//     refreshPage()
// }

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


function renderAccountInfo(){
    
    // var html = "";
    // var msg = "Invalid Credentials";
    // var msg2 = "Password changed";
    // var header = "" ;

    // // get values for user entries   

    var description = $("description").value;
    // var type = $("type").value;
    var amount = $("amount").value;
    var runningTotal = [];

    users.forEach(function (user) { // run foreach on array to check values keys
        // console.log(user.userName + ' : ' +user.password); testing output.
        // using class of transactions
        if (userEmail == user.userName && userPassword == user.password  ){
            // var transactionId = Date.now();  
            
            // class Transaction {
            //     constructor(transactionId, description, type, amount){
            //         this.transactionId = transactionId;
            //         this.description = description;
            //         this.type = type;
            //         this.amount = amount; 
            //     }
            //     creatTransactionArray(){
            //         return {transactionId: transactionId, description : description, type : type, amount : amount }
            //     }
            // }

            // var newEntry = new Transaction(transactionId,description,type,amount);
            // user.transactions.push(newEntry.creatTransactionArray());
            // localStorage.setItem("users", JSON.stringify(users));
            // // alert('congratulations you logged in');
            // //window.open('account_page.html');

            // class transactionList {
            //     constructor(transactionId, description, type, amount){
            //         this.transactionId = transactionId;
            //         this.description = description;
            //         this.type = type;
            //         this.amount = amount; 
            //     }
            //     createTransactionArray(){
            //         for (var i in this.transactions) {
            //             html = html.concat("<p>");
            //             // html = html.concat("<a href='#' title='", i, "'>Delete</a>");
            //             html = html.concat(this.tasks[i]);
            //             html = html.concat("</p>");
            //         }
            //         this.displayDiv.innerHTML = html;
            //         // return {transactionId: transactionId, description : description, type : type, amount : amount };

            //         return {transactionId: transactionId, description : description, type : type, amount : amount };
            //     }
            // }
            // user.forEach(function(transactions) {
            //     console.log(transactions);
            //  });
            
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
               // alert(`${e.description} ${e.type} ${e.amount}`);
                // text = document.createTextNode(`${e.description} ${e.type} ${e.amount}`)
                // $("registration_info").appendChild(text)
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
             
              

                // $("registration_info").innerHTML += `${e.description} | ${e.type} |
                // ${e.amount} `
            });

            // $("registration_header").innerHTML = "This will be your account info " + userEmail;  
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

        // $("accountTotalTable").innerHTML += `
        //         <tr>
        //           <td>$${finalTotals} </td>
                  
        //         </tr>
                
        //       </table>
        //       `

    });

    //alert(textTotal.reduce((a, b) => a + b));
   
}




window.onload = function() {
    renderAccountInfo();
       
    //$("update").onclick = addTransaction; // not used but this is universal update button
    $("deposit").onclick = addDepostit;
    $("withdraw").onclick = addDebit;
    
    // $("update").onclick = renderAccountInfo;
    $("description").focus();
};

// window.onload = function () {
    
//     if(!localStorage.getItem("isLoggedIn", false)){
//         // $("registration_header").innerHTML = "YOU MUST LOG IN TO VIEW THIS PAGE!" ;
//         $("spending").style.display = 'none'; 
//         $("accountPage").style.display = 'none'; 
    
//     }
    
// };
         