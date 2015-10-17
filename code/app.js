'use strict';
require('app-module-path').addPath(__dirname);

//Load our global helpers.
require('app/global/helpers');

//Create the app instance
var express = require('express');
var app = express();

//Now we load our config files.
//This sets up our app, database, error handling, and view engine.
require('config')(app);

app.use('/', require('routes'));

module.exports = app;
