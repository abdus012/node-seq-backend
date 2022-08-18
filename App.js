// const express = require("express");
// const app = express();
const db = require('./seqDB/index')
const Joi = require('joi');
const config = require('./config/config')
const manifest = config.server;
const Glue = require('glue');
// const { Client } = require('pg')
// const client = new Client({
//   user: 'myuser',
//   host: 'localhost',
//   database: 'employee',
//   password: 'mypass',
//   port: 5432,
//   dialect: 'postgres'
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

'use strict';

const Hapi = require('@hapi/hapi');
const fs = require('fs');
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





// start() 


// const DB =
//   "mongodb+srv://Abdus:xBUd9PlLBgbVVCQE@cluster0.yajlmt9.mongodb.net/mernstack-e-shop?retryWrites=true&w=majority";

// MongoClient.connect(DB)
//   .then((result) => {
//     console.log("Connected");
//   })
//   .catch((err) => {
//     console.log(err, "err");
//   });
