'use strict'

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http')
const bodyParser = require('body-parser')

const router = require('./src/router')

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
server.use(bodyParser.urlencoded({extended: false}))
server.use(router)

// const io = socketIO(server);

// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });

// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

server.listen(PORT, () => console.log(`Listening on ${ PORT }`));