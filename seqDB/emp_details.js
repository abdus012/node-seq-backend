'use strict';
module.exports = (sequelize, DataTypes) => {
  const emp_details = sequelize.define('emp_details', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    emp_name: {
      field: 'emp_name',
      type: DataTypes.STRING
    },
    emp_domain: {
      field: 'emp_domain',
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,
    tableName: 'emp_details',
    schema: 'public'
  });
  return emp_details;
};
