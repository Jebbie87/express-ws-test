const ClientCapability = require('twilio').jwt.ClientCapability;
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const nameGenerator = require('./name_generator');
const config = require('../config');

console.log('config', config)

var accountSid = 'AC984ccb6a7e8ea07a136da8d48486c3cd';
var authToken = '42bca67f223524876526749b5fb6cf88';
console.log('test')
var client = require('twilio')(accountSid, authToken);

client.sip.ipAccessControlLists.create({
    friendlyName: "My new acl 1"
}, function(err, ipAccessControlList) {
  console.log(ipAccessControlList)
    // process.stdout.write(ipAccessControlList.sid);
});

// exports.tokenGenerator = function tokenGenerator() {
//   const identity = nameGenerator();
//   const capability = new ClientCapability({
//     accountSid: config.accountSid,
//     authToken: config.authToken,
//   });

//   capability.addScope(new ClientCapability.IncomingClientScope(identity));
//   capability.addScope(new ClientCapability.OutgoingClientScope({
//     applicationSid: config.twimlAppSid,
//     clientName: identity,
//   }));

//   // Include identity and token in a JSON response
//   return {
//     identity: identity,
//     token: capability.toJwt(),
//   };
// };

// exports.voiceResponse = function voiceResponse(toNumber) {
//   // Create a TwiML voice response
//   const twiml = new VoiceResponse();

//   if(toNumber) {
//     // Wrap the phone number or client name in the appropriate TwiML verb
//     // if is a valid phone number
//     const attr = isAValidPhoneNumber(toNumber) ? 'number' : 'client';
//     console.log('attr', attr)
//     const dial = twiml.dial({
//       callerId: config.callerId,
//     });
//     dial[attr]({}, toNumber);
//   } else {
//     twiml.say('Thanks for calling!');
//   }

//   return twiml.toString();
// };

// /**
// * Checks if the given value is valid as phone number
// * @param {Number|String} number
// * @return {Boolean}
// */
// function isAValidPhoneNumber(number) {
//   return /^[\d\+\-\(\) ]+$/.test(number);
// }
