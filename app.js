'use strict'

const express = require('express');
const path = require('path');
const http = require('http')
const bodyParser = require('body-parser')

const router = require('./src/router')

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
server.use(bodyParser.urlencoded({extended: false}))
server.use(router)

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('Express Server Started on Port ' + PORT + '!');
  });
});

server.listen(PORT, () => console.log(`Listening on ${ PORT }`));