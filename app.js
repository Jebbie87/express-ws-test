'use strict'

const express = require('express')
const app = express()
const expressWs = require('express-ws')(app)


app.use((req, res, next) => {
  console.log('middleware')
  req.testing = 'testing'
  return next()
})

app.get('/', (req, res, next) => {
  console.log('get route', req.testing)
  res.end()
})

app.ws('/', (ws, req) => {
  ws.on('connection', () => {
    console.log('WebSocket was opened')
  })

  ws.on('message', (msg) => {
    console.log('msg', msg)

  })
  console.log('socket', req.testing)

  ws.on('close', () => {
    console.log('WebSocket was closed')
  })
})

consolewsInstance.getWss().clients

app.listen(process.env.PORT || 8080, () => {
  console.log('Server listening on port 5000')
})