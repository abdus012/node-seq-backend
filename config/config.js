const config = {
  storage: {
      local: {
        username: "myuser",
        host: "localhost",
        database: "employee",
        password: "mypass",
        port: process.env.Port,
        dialect: "postgres",
      },
    },
};

module.exports = config;
