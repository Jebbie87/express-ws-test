// 'use strict'

// const express = require('express')
// const app = express()
// const expressWs = require('express-ws')(app)


// app.use((req, res, next) => {
//   console.log('middleware')
//   req.testing = 'testing'
//   return next()
// })

// app.get('/', (req, res, next) => {
//   console.log('get route', req.testing)
//   res.end()
// })

// app.ws('/', (ws, req) => {
//   console.log('WebSocket was opened')
//   ws.on('connection', () => {
//     console.log('WebSocket was opened')
//   })

//   ws.on('message', (msg) => {
//     ws.send(msg)
//     console.log('msg', msg)

//   })
//   console.log('socket', req.testing)

//   ws.on('close', () => {
//     console.log('WebSocket was closed')
//   })
// })

// app.listen(process.env.PORT || 8080, () => {
//   console.log('Server listening on port 5000')
// })

const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

app.use(function (req, res) {
  res.send({ msg: "hello" });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.listen(process.env.PORT || 8080, function listening() {
  console.log('Listening on %d', server.address().port);
});