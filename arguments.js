"use strict";

// Displays arguments passed to the script

var system = require('system');
if (system.args.length === 1) {
  console.log('Oops! Try passing some arguments when invoking this script.');
} else {
  system.args.forEach(function (arg, i) {
    console.log(i + ': ' + arg);
  });
}
phantom.exit(); // terminate
