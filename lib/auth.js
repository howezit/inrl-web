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
 const keys = inrlkeys.map(a=> a.k);
 if(!keys.includes(key)) return {status: false,message: 'key not registered'};
 const limit = inrlkeys.filter(a=>a.k==key);
 const exist = await apikey.findOne({
        where: {
            key
        }
    });
 if(!exist) {
    await apikey.create({
            key,
            limit: 1
        })
   return {status: true};
 } else {
   const remains = limit - exist.limit;
   if(remains < 1) return {status: false,message: 'api key over'};
   exist.update(
 }
}
module.exports = {};
