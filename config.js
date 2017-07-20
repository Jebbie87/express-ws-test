const dotenv = require('dotenv').config()
const cfg = {}

cfg.port = process.env.PORT || 3000

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
//
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.
cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.authToken = process.env.TWILIO_AUTH_TOKEN;

cfg.twimlAppSid = process.env.TWILIO_TWIML_APP_SID;
cfg.callerId = process.env.TWILIO_CALLER_ID;

cfg.apiKey = process.env.TWILIO_API_KEY
cfg.apiKeySecret = process.env.TWILIO_API_KEY_SECRET

// Export configuration object
module.exports = cfg;