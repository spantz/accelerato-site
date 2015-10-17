'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('users', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            username: Sequelize.STRING,
            email: Sequelize.STRING,
            type: Sequelize.ENUM('teacher', 'student'),
            password: Sequelize.STRING,
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
            deleted_at: Sequelize.DATE
        });

        queryInterface.createTable('instruments', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name: Sequelize.STRING,
            type: Sequelize.ENUM('string', 'woodwind', 'percussion', 'brass'),
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
            deleted_at: Sequelize.DATE
        });

        queryInterface.createTable('courses', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            instrument_id: Sequelize.INTEGER,
            teacher_id: Sequelize.INTEGER,
            difficulty: Sequelize.INTEGER,
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
            deleted_at: Sequelize.DATE
        });

        queryInterface.createTable('sessions', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            course_id: Sequelize.INTEGER,
            student_id: Sequelize.INTEGER,
            starting_at: Sequelize.DATE,
            ending_at: Sequelize.DATE,
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
            deleted_at: Sequelize.DATE
        });
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('users');
        queryInterface.dropTable('instruments');
        queryInterface.dropTable('courses');
        queryInterface.dropTable('sessions');
    }
};
