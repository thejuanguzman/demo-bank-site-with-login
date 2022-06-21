// alert('hello') // test connection

"use strict";
var $ = function(id) { return document.getElementById(id); };

// set up initial static data for this project. Possible updates way later is to validate user-> push/update this spending array to loggd in user

var spending = [
    { category: "Food and dining", color: "#5d8aa8", value: 2005.00 },
    { category: "Auto and Transport", color: "#e32636", value: 1471.31 },
    { category: "Shopping", color: "#89cff0", value: 892.86 },
    { category: "Bills and Utilities", color: "#ffbf00", value: 531.60 },
    { category: "Mortgage", color: "#8db600", value: 1646.00 },
    { category: "Entertainment", color: "#fbceb1", value: 179.52 }
];

function createBarChart (data) {
    // Start with the container.
    var chart = document.createElement("div");
    
    // The container must have position: relative. ****
    chart.style.position = "relative";
    
    // The chart's height is the value of its largest - data item plus a margin.
    var height = 0;
    for (var i = 0; i < data.length; i += 1) {
        height = Math.max(height, data[i].value);
        height = height / 2;
    }
    chart.style.height = (height + 10) + "px";
    
    // Give the chart a bottom border. 
    chart.style.borderBottomStyle = "solid";
    chart.style.borderBottomWidth = "0px";

    var barPosition = 0;
    // Iterate through the data.
    // var categoryName = ""; // this category naming did not work
    // for (var i = 0; i < data.length; i += 1) {
    //     categoryName = data[i].category;
        
    // }    
    
    var barWidth = 50;
    for (i = 0; i < data.length; i += 1) {
       
        // Basic column setup.
        var dataItem = data[i];

        var bar = document.createElement("div"); // create the div for each bar
        bar.classList.add("bars"); // give each bars div a class to control with css

        var cats = document.createElement("div"); // create and place below each category name from the values
        cats.innerHTML = dataItem.category;
        cats.style.position = "absolute";
        cats.style.bottom = "-60px";
        cats.style.left = barPosition + "px";
        cats.style.width = barWidth + "px";
        cats.style.fontSize = "14px"
                
        bar.style.position = "absolute";
        bar.style.left = barPosition + "px";
        bar.style.width = barWidth + "px";
        bar.style.backgroundColor = dataItem.color;
        bar.style.height = (dataItem.value / 5) + "px";
        bar.style.borderStyle = "solid";
        bar.style.borderColor = dataItem.color;   
                
        // css styling of bars
        bar.style.MozBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.WebkitBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.boxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.MozBorderRadiusTopleft = "0px";
        bar.style.WebkitBorderTopLeftRadius = "0px";
        bar.style.borderTopLeftRadius = "0px";
        bar.style.MozBorderRadiusTopright = "0px";
        bar.style.WebkitBorderTopRightRadius = "0px";
        bar.style.borderTopRightRadius = "0px";
        bar.style.bottom = "0px";
        
        chart.appendChild(bar);
        chart.appendChild(cats);
        
        // Move to the next bar.  We provide an entire bar's
        // width as space between columns.
        barPosition += (barWidth * 2);
        
    }

    // logged in check to see if local storage isloggedin has been set to true previously. If exists then show chart. If deleted from storage by logout button in the login/out page and js then it shows message
     if(!localStorage.getItem("isLoggedIn", false)){
        $("registration_header").innerHTML = "YOU MUST LOG IN TO VIEW THIS CHART!" ;  

    } else {
        $("registration_header").appendChild(chart);
        return chart;
    }
    
};

// this shrink function sets the hights of the bars divs to 0px height and css in the styles sheet constrols the animation or trassition speed.
var shrink = function(){
    // alert('cool - function called')
    var theBars = document.querySelectorAll('.bars'); // grabb the previously inserted bars
    theBars.forEach(bar => bar.style.height = "0px"); // reduce their size to zero - css handles the transition speed
    
};


var loggedOutMessage = function(){
    // logged in check to see if local storage isloggedin has been set to true previously.
    if(!localStorage.getItem("isLoggedIn", false)){
        $("registration_header").innerHTML = "YOU MUST LOG IN TO VIEW THIS CHART!" ;  

    } 
}

// document.getElementsByClassName("bars").style.display = "none";



// did not work
// var shrink = function(){
//     document.querySelectorAll('.bars');
//     document.querySelectorAll('.bars').style.backgroundColor = 'blue';
//     document.querySelectorAll('.bars').style.height = '2000000px';
//     document.querySelectorAll('.bars').style.visibility = 'none';



window.onload = function () {
    
    var chart = createBarChart(spending);
    document.body.appendChild(chart);
    loggedOutMessage();

    $("registration_header").appendChild(chart);
    $("reset").onclick = shrink;

   
    
};
            