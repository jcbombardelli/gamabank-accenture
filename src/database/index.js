const Sequelize = require('sequelize');
const dbConfig = require('../configs/database');

const connection =  new Sequelize(dbConfig);

module.exports = connection;