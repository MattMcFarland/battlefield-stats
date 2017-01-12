const { validateUserParams } = require('./utils/asserts');

class Stats {

  constructor(Api) {
    this.request = Api.request;
  }

  careerForOwnedGames (params, cb) {
    try {
      validateUserParams(params, {
        required: ['platform'],
        either: [ ['personaId', 'displayName'] ]
      });
      this.request('/Stats/CareerForOwnedGames', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  basicStats (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Stats/BasicStats', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  detailedStats (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Stats/DetailedStats', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

}


module.exports = Stats;