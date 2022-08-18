'use strict';
module.exports = (sequelize, DataTypes) => {
  const emp_department = sequelize.define('emp_department', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    department_name: {
      field: 'department_name',
      type: DataTypes.STRING
    },
    emp_count: {
      field: 'emp_count',
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false,
    tableName: 'emp_department',
    schema: 'public'
  });
  return emp_department;
};
