const config = {
  storage: {
    development: {
      username: "myuser",
      host: "localhost",
      database: "employee",
      password: "mypass",
      port: 5432,
      dialect: "postgres",
    },
  },
};

module.exports = config;
