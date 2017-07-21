const db = require('../db.js')

exports.tokenGenerator = (req, res) => {
  const identity = nameGenerator();
  const capability = new ClientCapability({
    accountSid: config.accountSid,
    authToken: config.authToken,
  });

  capability.addScope(new ClientCapability.IncomingClientScope(identity));
  capability.addScope(new ClientCapability.OutgoingClientScope({
    applicationSid: config.twimlAppSid,
    clientName: identity,
  }));

  // Include identity and token in a JSON response
  return {
    identity: identity,
    token: capability.toJwt(),
  };

  const test = {
    identity: identity,
    token: capability.toJwt(),
  }

  res.json(test)
};