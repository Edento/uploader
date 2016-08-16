"use strict";
// setup express app
var express = require('express');
var app = express();
var logger = require('morgan');
var port = process.env.PORT || 3000;
require('./routes')(app);

app.use(logger('dev')); // for nice logs
app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port ' + port);