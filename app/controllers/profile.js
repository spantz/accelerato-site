'use strict';
var express = require('express');
var router = express.Router();
var faker = require('faker');
var moment = require('moment');

/* GET profile page. */

module.exports = function (app) {
  app.use('/profile', router);
};

router.get('/', function(req, res) {
  var user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar(),
    age: 'Teaching since April 2015'
  };
  var courses = [{
    title: 'Intro to Violin',
    sessions: [{
      start: {
        date: moment( new Date('October 17, 2015 23:00:00') ).format('MMM Do'),
        time: moment( new Date('October 17, 2015 23:00:00') ).format('h:mm a')
      },
      end: {
        date: moment( new Date('October 18, 2015 00:00:00') ).format('MMM Do'),
        time: moment( new Date('October 18, 2015 00:00:00') ).format('h:mm a')
      },
    },{
      start: {
        date: moment( new Date('October 21, 2015 17:00:00') ).format('MMM Do'),
        time: moment( new Date('October 21, 2015 17:00:00') ).format('h:mm a')
      },
      end: {
        date: moment( new Date('October 21, 2015 18:00:00') ).format('MMM Do'),
        time: moment( new Date('October 21, 2015 18:00:00') ).format('h:mm a')
      }
    }]
  },{
    title: 'Advanced Guitar',
    sessions: [{
      start: {
        date: moment( new Date('October 17, 2015 23:00:00') ).format('MMM Do'),
        time: moment( new Date('October 17, 2015 23:00:00') ).format('h:mm a')
      },
      end: {
        date: moment( new Date('October 18, 2015 00:00:00') ).format('MMM Do'),
        time: moment( new Date('October 18, 2015 00:00:00') ).format('h:mm a')
      }
    },{
      start: {
        date: moment( new Date('October 21, 2015 17:00:00') ).format('MMM Do'),
        time: moment( new Date('October 21, 2015 17:00:00') ).format('h:mm a')
      },
      end: {
        date: moment( new Date('October 21, 2015 18:00:00') ).format('MMM Do'),
        time: moment( new Date('October 21, 2015 18:00:00') ).format('h:mm a')
      }
    }]
  }, {
    title: 'Learn The Bangles',
    sessions: [{
      start: {
        date: moment( new Date('October 17, 2015 23:00:00') ).format('MMM Do'),
        time: moment( new Date('October 17, 2015 23:00:00') ).format('h:mm a')
      },
      end: {
        date: moment( new Date('October 18, 2015 00:00:00') ).format('MMM Do'),
        time: moment( new Date('October 18, 2015 00:00:00') ).format('h:mm a')
      }
    },{
      start: {
        date: moment( new Date('October 21, 2015 17:00:00') ).format('MMM Do'),
        time: moment( new Date('October 21, 2015 17:00:00') ).format('h:mm a')
      },
      end: {
        date: moment( new Date('October 21, 2015 18:00:00') ).format('MMM Do'),
        time: moment( new Date('October 21, 2015 18:00:00') ).format('h:mm a')
      }
    }]
  }];
  
  res.render('profile', { title: 'Accelerato', user: user, courses: courses });
});
