const ClientCapability = require('twilio').jwt.ClientCapability;
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const nameGenerator = require('../name_generator');
const config = require('../config');

console.log('config')

exports.tokenGenerator = function tokenGenerator() {
  const identity = nameGenerator();
  console.log('trigger')
  const capability = new ClientCapability({
    accountSid: config.accountSid,
    authToken: config.authToken,
  });
  console.log('trigger1')

  capability.addScope(new ClientCapability.IncomingClientScope(identity));
  console.log('trigger2')
  capability.addScope(new ClientCapability.OutgoingClientScope({
    accountSid: config.accountSid,
    applicationSid: config.twimlAppSid,
    clientName: identity,
  }));
  console.log('trigger3')

  // Include identity and token in a JSON response
  return {
    identity: identity,
    token: capability.toJwt(),
  };
};

exports.voiceResponse = function voiceResponse(toNumber) {
  // Create a TwiML voice response
  const twiml = new VoiceResponse();

  if(toNumber) {
    // Wrap the phone number or client name in the appropriate TwiML verb
    // if is a valid phone number
    const attr = isAValidPhoneNumber(toNumber) ? 'number' : 'client';

    const dial = twiml.dial({
      callerId: config.callerId,
    });
    dial[attr]({}, toNumber);
  } else {
    twiml.say('Thanks for calling!');
  }

  return twiml.toString();
};

/**
* Checks if the given value is valid as phone number
* @param {Number|String} number
* @return {Boolean}
*/
function isAValidPhoneNumber(number) {
  return /^[\d\+\-\(\) ]+$/.test(number);
}
