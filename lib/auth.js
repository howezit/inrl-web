require('../settings');
const {db} = require('../db');
const { DataTypes } = require('sequelize');

const apikey = db.define('apikey', {
   key: {
    type: DataTypes.STRING,
    allowNull: false
  },
  limit: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

const addLimit = async(key) => {
 const keys = inrlkeys.map(a=> a.key);
 if(!keys.includes(key)) return {status: false,message: 'key not registered'};
 const {limit} = inrlkeys.filter(a=>a==key);
 if(!)
}
module.exports = {};
