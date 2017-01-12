const assert = require('assert');
const https = require('https');
const toQueryString = require('./utils/toQueryString');

class Api {

  constructor(apiKey, rootPath, requestOptions) {
    assert(apiKey, 'missing apiKey');
    this.request = this.request.bind(this);
    this.apiKey = apiKey;
    this.rootPath = rootPath || '/bf1/api';
    this.requestOptions = {
      hostname: 'battlefieldtracker.com',
      port: 443,
      method: 'GET',
      headers: {
        'TRN-Api-Key': this.apiKey
      }
    };
  }

  request (path, params, cb) {
    const options = Object.assign({}, { path: this.rootPath + path + toQueryString(params)}, this.requestOptions);
    const req = https.request(options, (res) => {
      if (res.headers['content-type'].indexOf('application/json') === -1) {
        return cb(new Error("invalid response from battlefield tracker"), null);
      }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          cb(null, JSON.parse(body));
        } catch (e) {
          cb(e, null);
        }
      });
    });

    req.on('error', (e) => {
      cb(new Error(e), null);
    });
    req.end();
  }

}

module.exports = Api;
