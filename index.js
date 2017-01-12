const assert = require('assert');
const { Stats, Progression, Loadout, Server, Api, Platforms } = require('./lib');

class BattlefieldStats {
  constructor(apiKey) {
    assert(apiKey, 'apiKey missing, please provide the value from the given TRN-Api-Key from Battlefield Tracker');
    this.Api = new Api(apiKey);
    this.Loadout = new Loadout(this.Api);
    this.Progression = new Progression(this.Api);
    this.Server = new Server(this.Api);
    this.Stats = new Stats(this.Api);
    this.Platforms = Platforms;
    Api.Loadout = this.Loadout;
    Api.Progression = this.Progression;
    Api.Server = this.Server;
    Api.Stats = this.Stats;
    Api.Platforms = this.Platforms
  }
}

module.exports = BattlefieldStats;
