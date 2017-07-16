const Router = require('express').Router;

const {tokenGenerator, voiceResponse} = require('./handler');

const router = new Router();

/**
 * Generate a Capability Token for a Twilio Client user - it generates a random
 * username for the client requesting a token.
 */
router.get('/token', (req, res) => {
  res.send(tokenGenerator());
});

router.post('/voice', (req, res) => {
  console.log('hello')
  console.log('req.body', req.body)
  res.set('Content-Type', 'text/xml');
  res.send(voiceResponse(4164540016));
});

module.exports = router;
