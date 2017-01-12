const { validateGeneralParams } = require('./utils/asserts');

class Server {

  constructor(Api) {
    this.request = Api.request;
  }

  quickServerInfo (params, cb) {
    try {
      validateGeneralParams(params, {
        required: ['platform', 'id']
      });
      this.request('/quick-server-info', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

}

module.exports = Server;
