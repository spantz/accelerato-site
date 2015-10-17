'use strict';
var express = require('express');
var router = express.Router();
var faker = require('faker')

/* GET profile page. */
router.get('/:id', function(req, res) {
  var user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar(),
    age: 'Teaching since 2015'
  };
  res.render('profile', { title: 'Accelerato', user: user });
});

module.exports = router;
