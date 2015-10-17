/**
 * Created by jamesspence on 10/17/15.
 */
var express = require('express');
var path = require('path');

function ViewConfig(app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.static(path.join(__dirname, 'public')));
}

module.exports = ViewConfig;