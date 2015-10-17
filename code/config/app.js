/**
 * Created by jamesspence on 10/17/15.
 */

var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

function AppConfig(app) {
    app.use(favicon());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(require('node-compass')({mode: 'expanded'}));
}

module.exports = AppConfig;