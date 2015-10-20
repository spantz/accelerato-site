/**
 * Created by jamesspence on 10/17/15.
 */
var sequelize = require('app/database/db').getInstance();
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');

var User = sequelize.define('user', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    type: Sequelize.ENUM('teacher', 'student'),
    password: {
        type: Sequelize.STRING,
        set: function (value) {
            bcrypt.hash(value, null, null, function (err, hash) {
                this.setDataValue('password', bcrypt.hash(hash));
            });
        }
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE
}, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    instanceMethods: {
        validPassword: function (password) {
            return bcrypt.compare(password, user.password);
        }
    }
});

module.exports = User;