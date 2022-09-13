'use strict';
module.exports = (sequelize, DataTypes) => {
  const propertylist = sequelize.define('propertylist', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      field: 'name',
      type: DataTypes.STRING
    },
    description: {
      field: 'description',
      type: DataTypes.STRING
    },
    size: {
        field: 'size',
        type: DataTypes.STRING
      }
  }, {
    timestamps: false,
    tableName: 'propertylist',
    schema: 'public'
  });
  return propertylist;
};
