const { validateGeneralParams, validateUserParams } = require('./utils/asserts');

class Loadout {
  constructor (Api) {
    this.request = Api.request;
  }
  getItems (params, cb) {
    try {
      validateGeneralParams(params);
      this.request('/Loadout/GetItems', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }
  getItemGates (params, cb) {
    try {
      validateGeneralParams(params);
      this.request('/Loadout/GetItemGates', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }
  getPresets (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Loadout/GetPresets', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }
  getEquippedDogtags (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Loadout/GetEquippedDogtags', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }
}


module.exports = Loadout;
