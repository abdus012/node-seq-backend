'use strict';
module.exports = (sequelize, DataTypes) => {
  const sleepapp = sequelize.define('sleepapp', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      field: 'username',
      type: DataTypes.STRING
    },
    question1: {
      field: 'question1',
      type: DataTypes.STRING
    },
    question2: {
        field: 'question2',
        type: DataTypes.STRING
      }
  }, {
    timestamps: false,
    tableName: 'sleepapp',
    schema: 'public'
  });
  return sleepapp;
};
