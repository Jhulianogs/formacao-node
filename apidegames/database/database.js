const Sequelize = require('sequelize');

const connection = new Sequelize('apidegames', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;