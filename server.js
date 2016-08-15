"use strict";
// setup express app
var express = require('express');
var app = express();

var logger = require('morgan');


var port = process.env.PORT || 3000;

app.use(logger('dev')); // for nice logs

app.use(express.static(__dirname + '/public'));

// note to self: external routs are not working for now, so i moved
//  this into the server.js file. after everything works, fixs this!

// var routes = require('./routes')(app);


// add multiparty module in order to access req.files.file

var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

var requestHandler = require('./requestHandler');

app.post('/api/upload', multipartyMiddleware, requestHandler.upload);

app.listen(port);
console.log('Listening on port ' + port);