/**
 * Created by jamesspence on 10/17/15.
 */

var Sequelize = require('sequelize');
var instance;

var DB = {

    initialize: function (host, database, user, password) {

        instance = new Sequelize(database, user, password, {
            host: host,
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });
        return instance;
    },

    getInstance: function () {
        return instance;
    }

};

exports = module.exports = DB;