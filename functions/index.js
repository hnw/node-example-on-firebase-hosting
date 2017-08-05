const functions = require('firebase-functions');
const nodeinfo = require('nodejs-info');

exports.nodeinfo = functions.https.onRequest((req, res) => {
  Object.defineProperty(req, 'ip', {
    get: function() {
      return this._ip;
    },
    set: function(val) {
      this._ip = val;
    },
  });
  res.status(200).send(nodeinfo(req));
});
