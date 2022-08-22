require('dotenv').config();

module.exports = {
  development: {
    username: "myuser",
    host: "localhost",
    database: "employee",
    password: "mypass",
    port: 5432,
    dialect: "postgres",
  },
  production: {
    database: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};
