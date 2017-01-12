# battlefield stats (bf1, bf4)

A node api that allows you to collect, analyze, and serve battlefield 1 and battlefield 4 statistics. This fully
makes use of the battlefield tracker network - https://battlefieldtracker.com/

## Quick start

```
npm install battlefield-stats
```

```javascript
// API_KEY from https://battlefieldtracker.com/site-api
const bf = new BattlefieldStats(API_KEY);
const params = { personaId: xxxxxxxxx, platform: bf.Platforms.PC }
// bf.Server.quickServerInfo({platform: 3}, console.log);
bf.Api.request('/Stats/BasicStats', params, responseCallback)
```

## Getting started

*Get your API Key* from the battlefield tracker network here: https://battlefieldtracker.com/site-api

*Install battlefield-stats using npm* by running using `npm install battlefield-stats`

### full Example
```javascript
const BattlefieldStats = require('battlefield-stats');
const API_KEY = 'YourAPIKeyFromBfTracker' // from https://battlefieldtracker.com/site-api
const bf = new BattlefieldStats(API_KEY);

// All params mirror params listed at http://docs.trnbattlefield.apiary.io/#
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YourOriginUserName  // Or you can use personaId
}

// Proxies to all api routes found http://docs.trnbattlefield.apiary.io/#
const route = '/Stats/BasicStats';

bf.Api.request(route, params, (error, response) => {
  // response callback
  if (!error && response) {
    console.log(response);
  }
})
```

### Usage with Express

You can use `battlefield-stats-express` which adds hooks and functionality to express middleware with this module.

## API Documentation

This API closely follows the REST Api documentation found at http://docs.trnbattlefield.apiary.io/#

### Common Parameters
All API calls require `platform` and either `personaId` or `displayName`, and optionally may use the `game` parameter.

#### Platform
All the requests require a platform query parameter.
The following values are allowed: 1 for Xbox, 2 for PlayStation, and 3 for Origin. Alternatively, you can use `Api.Platforms.XBOX`, `Api.Platforms.PS4`, `Api.Platforms.PC` respectively.

#### Personas
Each request will also need either the `personaId` or `displayName` parameter, if specified.
 > If you're using the displayName variable be warned that for Xbox One and PlayStation 4 the api can only retrieve data if the player has played Battlefield 4 or Hardline.

#### Game
Certain requests can have an optional game parameter. The default value is `tunguska`, which is the codename for Battlefield 1. It's possible to set this to `bf4` to get data from Battlefield 4.

### Api.Platforms

This is just an enum to allow for more human readable code and is completely optional.

`Api.Platforms.XBOX`: `1`
`Api.Platforms.PS4`: `2`
`Api.Platforms.PC`: `3`

### Api.request
A generic request can be made to obtain anything from the api, however at this time all are covered with the rest of the apis.

```javascript
const route = '/Stats/CareerForOwnedGames';
const params = { platform: bf.Platforms.XBOX, personaId: xxxxxxxxx };
bf.Api.request(route, params, console.log);
```

The `route` argument may be any of the `Request Routes` mentioned in this documentation.

### Api.Stats

#### Api.Stats.careerForOwnedGames

**Parameters:** `platform`, `personaId`, `displayName`

**Request Route:** `/Stats/CareerForOwnedGames`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YourOriginUserName, // Or you can use personaId
}
bf.Api.Stats.careerForOwnedGames(params, (error, response) => {
  // handle response...
})
```

#### Api.Stats.basicStats

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Stats/BasicStats`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YourOriginUserName, // Or you can use personaId
  game: 'tunguska' // default is tunguska, can be changed to bf4
}
bf.Api.Stats.basicStats(params, (error, response) => {
  // handle response...
})
```

#### Api.Stats.detailedStats

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Stats/DetailedStats`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YourOriginUserName, // Or you can use personaId
  game: 'tunguska' // default is tunguska, can be changed to bf4
}
bf.Api.Stats.detailedStats(params, (error, response) => {
  // handle response...
})
```

### Api.Progression

#### Api.Progression.getCodex

**Parameters:** `platform`, `game`

**Request Route:** `/Progression/GetCodex`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  game: 'tunguska' // default is tunguska, can be changed to bf4
}
bf.Api.Progression.getCodex(params, (error, response) => {
  // handle response...
})
```

#### Api.Progression.getFilteredCodex

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Progression/GetFilteredCodex`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YOUR_DISPLAY_NAME
}
bf.Api.Progression.getFilteredCodex(params, (error, response) => {
  // handle response...
})
```

#### Api.Progression.getKitRanksMap

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Progression/GetKitRanksMap`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YOUR_DISPLAY_NAME
}
bf.Api.Progression.getKitRanksMap(params, (error, response) => {
  // handle response...
})
```

#### Api.Progression.getMedals

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Progression/GetMedals`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YOUR_DISPLAY_NAME
}
bf.Api.Progression.getMedals(params, (error, response) => {
  // handle response...
})
```

#### Api.Progression.getVehicle

**Parameters:** `platform`, `vehicleId`, `personaId`, `displayName`, `game`

**Request Route:** `/Progression/GetVehicle`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  vehicleId: VEHICLE_ID,
  displayName: YOUR_DISPLAY_NAME
}
bf.Api.Progression.getVehicle(params, (error, response) => {
  // handle response...
})
```

#### Api.Progression.getVehicles

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Progression/GetVehicles`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YOUR_DISPLAY_NAME
}
bf.Api.Progression.getVehicles(params, (error, response) => {
  // handle response...
})
```

#### Api.Progression.getWeapon

**Parameters:** `platform`, `weaponId`, `personaId`, `displayName`, `game`

**Request Route:** `/Progression/GetWeapon`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  weaponId: WEAPON_ID,
  displayName: YOUR_DISPLAY_NAME
}
bf.Api.Progression.getWeapon(params, (error, response) => {
  // handle response...
})
```

#### Api.Progression.getWeapons

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Progression/GetWeapons`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
  displayName: YOUR_DISPLAY_NAME
}
bf.Api.Progression.getWeapons(params, (error, response) => {
  // handle response...
})
```

### Api.Loadout

#### Api.Loadout.getItems

**Parameters:**  `platform`, `game`

**Request Route:** `/Loadout/GetWeapons`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
}

bf.Api.Loadout.getWeapons(params, (error, response) => {
  // handle response...
})
```

#### Api.Loadout.getItemGates

**Parameters:**  `platform`, `game`

**Request Route:** `/Loadout/getItemGates`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PC, // also you can use XBOX or PS4
}

bf.Api.Loadout.getItemGates(params, (error, response) => {
  // handle response...
})
```

#### Api.Loadout.getPresets

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Loadout/GetPresets`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PS4, // also you can use XBOX or PC
  displayName: YOUR_DISPLAY_NAME
}

bf.Api.Loadout.getItemGates(params, (error, response) => {
  // handle response...
})
```

#### Api.Loadout.getEquippedDogtags

**Parameters:** `platform`, `personaId`, `displayName`, `game`

**Request Route:** `/Loadout/GetEquippedDogtags`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PS4, // also you can use XBOX or PC
  displayName: YOUR_DISPLAY_NAME
}

bf.Api.Loadout.getEquippedDogtags(params, (error, response) => {
  // handle response...
})
```

### Api.Server

#### Api.Server.getCodex

**Parameters:** `platform`, `game`

**Request Route:** `/quick-server-info`

**Usage:**

```javascript
const bf = new require('battlefield-stats')(YOUR_API_KEY);
const params = {
  platform: bf.Platforms.PS4, // also you can use XBOX or PS4
  game: 'tunguska' // default is tunguska, can be changed to bf4
}
bf.Api.Server.quickServerInfo(params, (error, response) => {
  // handle response...
})
```