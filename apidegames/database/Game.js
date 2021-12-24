const Sequelize = require('sequelize');
const cn = require('./database');

const Game = cn.define('game', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE(11,2),
        allowNull: false
    }
});
Game.sync({force: false}).then(() => {});

module.exports = Game;