const config = {
  storage: {
      local: {
        username: "myuser",
        host: "localhost",
        database: "employee",
        password: "mypass",
        port: 5432,
        dialect: "postgres",
      },
    },
    server: { 
        plugin: './api',
        options: {
          routes: {
            prefix: '/api'
          }
        }
      
      
    },
};

module.exports = config;
