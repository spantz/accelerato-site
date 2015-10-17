/**
 * Created by jamesspence on 10/17/15.
 */

var Sequelize = require('sequelize');
var DB = require('app/database/db');

function DatabaseConfig() {
    var host = getEnv('DB_HOST', 'localhost');
    var database = getEnv('DB_DATABASE', 'db');
    var user = getEnv('DB_USER', 'accelerato');
    var password = getEnv('DB_PASSWORD', 'secret');

    DB.initialize(host, database, user, password);
}

exports = module.exports = DatabaseConfig;