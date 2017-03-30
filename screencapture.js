"use strict";

// Loads url (https://github.com/) and saves it as an image in the same directory
// the script was run in.

var page = require('webpage').create(); // create web page object
page.open('http://github.com/', function(status) {
  console.log("Status: ", status);
  if (status === "success") {
    page.render('github.png'); // save screenshot of web page
  }
  phantom.exit(); // terminate
});
