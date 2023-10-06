const Sequelize = require('sequelize');

const connection = new Sequelize('apirenatonogue04', 'apirenatonogue04', 'senha12345', {
    host: 'mysql.apirenatonogueira.kinghost.net',
    dialect: 'mysql',
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true
    },
    timezone: '-03:00'
    
});

module.exports = connection;


