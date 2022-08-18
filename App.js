
const db = require('./seqDB/index')
const Joi = require('joi');
const config = require('./config/config')
const manifest = config.server;
const Glue = require('glue');

'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.Server({
        host: 'localhost',
        port: 3000
    });

   
    await server.register({
      plugin: require('./index')
    });

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);

}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();



