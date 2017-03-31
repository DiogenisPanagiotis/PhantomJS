"use strict";

// Displays 10 second countdown

var t = 10,
interval = setInterval(function(){
    if (t > 0) {
      console.log(t--);
    } else {
      console.log("Blast off!");
      phantom.exit(); // terminate
    }
}, 1000);
