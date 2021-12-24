const Sequelize = require('sequelize');
const cn = require('./database');

const User = cn.define('user',{
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    senha: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

User.sync({force: false}).then(response => {}).catch(err => {});

module.exports = User;