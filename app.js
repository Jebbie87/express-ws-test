'use strict'

const express = require('express');
const path = require('path');
const http = require('http')
const bodyParser = require('body-parser')

const router = require('./src/router')

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

app.use('/', routes)

db.sequelize.sync().then(() => {
  app.listen(PORT, () =>  console.log(`Listening on ${ PORT }`));
});
