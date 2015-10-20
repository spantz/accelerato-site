/**
 * Created by jamesspence on 10/17/15.
 */
var User = require('app/model/user');

function UserController() {
    'use strict';
}

UserController.prototype.loginPage = function (req, res) {
    res.render('login');
};

UserController.prototype.loginSuccess = function (req, res) {
    res.send('You made it!');
};

UserController.prototype.register = function (req, res) {
    User.create({
        username: 'james',
        password: 'secret'
    }).then(function () {
        console.log('User Created.');
        res.send('we did it');
    });
};

module.exports = new UserController();