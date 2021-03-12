const Sequelize = require('sequelize');
const { database } = require('./env');
const { dialect } = require('./database');

const { user, name, pass, host } = database;

module.exports = {
    plugin: require('hapi-sequelizejs'),
    options:[
        {
            name: 'gamabank',
            models: [__dirname + '../api/models/*.js'],
            ignoredModels: [],
            sequelize: new Sequelize('', 'root', 'root', { dialect, host }),
            sync: true,
            forceSync: false
        }
    ]    
}