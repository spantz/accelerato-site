/**
 * Created by jamesspence on 10/17/15.
 */
require('dotenv').load();

var env = process.env;
var user = env.DB_USER;
var pass = env.DB_PASSWORD;
var database = env.DB_DATABASE;
var host = env.DB_HOST;
var dialect = 'mysql';
var store = 'json';
var path = './migrations/sequelize-meta.json';

var options = {
    username: user,
    password: pass,
    database: database,
    host: host,
    dialect: dialect,
    migrationStorage: store,
    migrationStoragePath: path
};

module.exports = {
    development: options,
    test: options,
    production: options
};
