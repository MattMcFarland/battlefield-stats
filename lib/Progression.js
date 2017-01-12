const { validateGeneralParams, validateUserParams } = require('./utils/asserts');

class Progression {

  constructor (Api) {
    this.request = Api.request;
  }

  getCodex (params, cb) {
    try {
      validateGeneralParams(params);
      this.request('/Progression/GetCodex', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  getDogtags (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Progression/GetDogtags', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  getFilteredCodex (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Progression/GetFilteredCodex', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  getKitRanksMap (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Progression/GetKitRanksMap', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  getMedals (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Progression/GetMedals', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  getVehicle (params, cb) {
    try {
      validateUserParams(params, {
        required: ['platform', 'vehicleId'],
        optional: ['game', 'personaId', 'displayName']
      });
      this.request('/Progression/GetVehicle', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  getVehicles (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Progression/GetVehicles', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  getWeapon (params, cb) {
    try {
      validateUserParams(params, {
        required: ['platform', 'weaponId'],
        optional: ['game', 'personaId', 'displayName']
      });
      this.request('/Progression/GetWeapon', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }

  getWeapons (params, cb) {
    try {
      validateUserParams(params);
      this.request('/Progression/GetWeapons', params, cb);
    } catch (e) {
      cb(e, null);
    }
  }
}

module.exports = Progression;
