'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const configJson = require('../config/config');
const db = {};

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const config = configJson[env];

let sequelize;
if (config.environment === 'production') {
  sequelize = new Sequelize(
    process.env[config.use_env_variable], config,
  );
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      dialectOption: {
        ssl: true,
        native: true,
      },
      logging: true,
    },
  );
} else {
  sequelize = new Sequelize('','', '', config);

}


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
