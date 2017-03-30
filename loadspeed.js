"use strict";

// Loads specified URL and measures the time it takes to load it.
// Script command: phantomjs loadspeed.js http://www.google.com

var page = require('webpage').create();
var system = require('system')
var t, address;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>'); // tells the user to include a url
    phantom.exit();
} else {
    t = Date.now(); // get start time
    address = system.args[1];
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Failure loading the address.');
        } else {
            t = Date.now() - t; // get end time
            console.log('Page title: ' + page.evaluate(function() {
                return document.title;
            }));
            console.log('Loading time ' + t + ' msec.');
        }
        phantom.exit(); // terminate
    });
}
