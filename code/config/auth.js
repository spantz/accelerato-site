/**
 * Created by jamesspence on 10/17/15.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('app/model/user');
var bcrypt = require('bcrypt-nodejs');
var express = require('express');
var session = require('express-session');
var moment = require('moment');

function userNotValid(user, password) {
    return (typeof user != 'undefined' && user != null) || !user.validPassword(password);
}

function AuthConfig(app) {
    passport.use(new LocalStrategy(function (username, password, done) {
        User.findOne({
            where: {
                username: username
            }
        }).then(function (user) {
            user = {
                id: 1234,
                created_at: moment()
            };
            //if (!userNotValid(user, password)) {
            //    done(null, false, {message: 'Incorrect username or password.'});
            //} else {
                done(null, user);
            //}
        });
    }));
    passport.serializeUser(function (user, done) {
        var token = user.id + '~@~' + user.created_at.format('YYYY-MM-DD HH:mm:ss');
        done(null, btoa(token));
    });
    passport.deserializeUser(function (hash, done) {
        var pieces = atob(hash).split('~@~');

        User.findOne({
            where: {
                id: pieces[0],
                created_at: pieces[1]
            }
        }).then(function (user) {
            //TODO ensure I don't need verification for this? What happens?
            done(null, user);
        });
    });
    app.use(session({
        secret: getEnv('APP_SECRET', 'secret'),
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = AuthConfig;