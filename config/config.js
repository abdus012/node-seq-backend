require('dotenv').config();

module.exports = {
  development: {
    username: "ufwgetyt",
    host: "rosie.db.elephantsql.com",
    database: "ufwgetyt",
    password: "XLdG1eAEwmBkkczpnP_MJERWcVX3KINc",
    port: 5432,
    dialect: "postgres",
  },
  production: {
    database: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};
