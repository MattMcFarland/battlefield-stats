const assert = require('assert');
const { Stats, Progression, Loadout, Server, Api, Platforms } = require('./lib');

class BattlefieldStats {
  constructor(apiKey) {
    assert(apiKey, 'apiKey missing, please provide the value from the given TRN-Api-Key from Battlefield Tracker');
    this.Api = new Api(apiKey);
    Api.Loadout = new Loadout(this.Api);
    Api.Progression = new Progression(this.Api);
    Api.Server = new Server(this.Api);
    Api.Stats = new Stats(this.Api);
    Api.Platforms = Platforms;
  }
}

module.exports = BattlefieldStats;
