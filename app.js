'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.Server({
        port: process.env.PORT || 3000
    });

   
    await server.register({
      plugin: require('./index'),
        routes: { cors: true }
    });

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);

}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();



