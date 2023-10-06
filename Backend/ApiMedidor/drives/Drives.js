const Sequelize = require('sequelize');
const connection = require('../database/database');





const Drives = connection.define('drives', {
    id_button: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    temperature: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tgr :{
        type: Sequelize.BOOLEAN,
        allowNull: false
    } 
    
})


Drives.sync({force: true});

module.exports = Drives;


