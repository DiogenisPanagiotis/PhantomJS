"use strict";

var page = require('webpage').create(); // create web page object
page.open('http://github.com/', function() {
  page.render('github.png'); // save screenshot of web page
  phantom.exit(); // terminate
});
