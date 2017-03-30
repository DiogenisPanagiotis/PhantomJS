"use strict";

// Logs the page title of requested url

var page = require('webpage').create();
page.open(url, function(status) {
  var title = page.evaluate(function() {
    return document.title; // fetch title
  });
  console.log('Page title: ' + title); // display title
  phantom.exit(); // terminate
});
