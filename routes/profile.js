'use strict';
var express = require('express');
var router = express.Router();
var faker = require('faker');

/* GET profile page. */
router.get('/:id', function(req, res) {
  var user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar(),
    age: 'Teaching since April 2015'
  };
  var courses = [{
    title: 'Intro to Violin',
    sessions: [{
      start: new Date('October 17, 2015 05:00:00'),
      end: new Date('October 17, 2015 06:00:00')
    }]
  }];
  
  res.render('profile', { title: 'Accelerato', user: user, courses: courses });
});

module.exports = router;
