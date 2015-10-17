'use strict';

//We include this first, to allow us to have absolute name paths.
global.rootRequire = function (module) {
    return require(__dirname + '/' + module);
};

//Load our global helpers.
rootRequire('app/global/helpers');

//Create the app instance
var express = require('express');
var app = express();

//Now we load our config files.
//This sets up our app, database, error handling, and view engine.
rootRequire('config')(app);

app.use('/', rootRequire('routes'));

module.exports = app;
