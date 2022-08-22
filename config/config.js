const config = {
  storage: {
    production: {
        use_env_variable: "DATABASE_URL",
      dialect: "postgres",
      },
    },
    // production: {
    //   username: "myuser",
    //   host: "localhost",
    //   database: "employee",
    //   password: "mypass",
    //   port: 5432,
    //   dialect: "postgres",
    //  }
};

module.exports = config;
