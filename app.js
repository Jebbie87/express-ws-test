const express = require('express')
const app = express()
const expressWs = require('express-ws')(app)


app.use(function (req, res, next) {
  console.log('middleware')
  req.testing = 'testing'
  return next()
})

app.get('/', function (req, res, next) {
  console.log('get route', req.testing)
  res.end()
})

app.ws('/', function (ws, req) {
  ws.on('message', function(msg) {
    console.log('msg', msg)
  })
  console.log('socket', req.testing)
})

app.listen(5000, function listening() {
  console.log('Server listening on port 8080')
})