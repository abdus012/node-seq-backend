'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const configJson = require('../config/config').development;
const db = {};


console.log(configJson);
let sequelize;
  sequelize = new Sequelize('','', '', configJson);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    //   console.log(file);
    //   console.log(__dirname);
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    // const model = sequelize['import'](path.join(__dirname, file));
    // console.log(__dirname)
    db[model.name] = model;
  });

Object.keys(db)
  .forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

    //console.log(sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
