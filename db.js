const { Sequelize } = require('sequelize');

const db = new Sequelize({
          dialect: 'sqlite',
          storage: './db.db',
          logging: false,
        })
  module.exports = {db};
