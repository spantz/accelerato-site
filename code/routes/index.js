'use strict';
var express = require('express');
var router = express.Router();
//var users = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('profile', { title: 'Accelerato' });
});

router.use('/users', users);

// catch 404 and forwarding to error handler
router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (router.get('env') === 'development') {
    router.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
        next();
    });
}

// production error handler
// no stacktraces leaked to user
router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
    next();
});

module.exports = router;
