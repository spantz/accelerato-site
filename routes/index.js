'use strict';
var express = require('express');
var router = express.Router();
var users = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('profile', { title: 'Accelerato' });
});

router.use('/users', users);

module.exports = router;
