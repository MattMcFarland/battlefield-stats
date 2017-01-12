const assert = require('assert');

/**
 * Throw an error if a parameter is not included
 * @param Array expected
 * @param Object params
 */
function assertRequiredParams (expected, params) {
  if (!expected) return;
  expected.forEach((expectedParam) => {
    assert(params[expectedParam], expectedParam + ' is required');
  });
}

/**
 * Throw an error if a parameter is not available
 * @param Array available
 * @param Object params
 */
function assertOptionalParams (available, params) {
  if (!available) return;
  Object.keys(params).forEach(param => {
    assert(available.indexOf(param) !== -1 || available.indexOf(param) !== -1, 'param ' + param + ' may not be used. Available params are ' + available);
  });
}

/**
 * Throw an error if one or another is not included
 * @param Array expected
 * @param Object params
 */
function assertEitherParams (expected, params) {
  if (!expected) return;
  expected.forEach((eitherPair) => {
    assert(params[eitherPair[0]] || params[eitherPair[1]], 'either ' + eitherPair[0] + ' or ' + eitherPair[1] + ' must be supplied.');
  });
}

/**
 * Calls assertions based on declarative schema
 * @param Object schema
 * @param Object params
 */
function assertParams (schema, params) {
  assert(schema, 'schema not defined');
  assert(params, 'params not defined');

  assertEitherParams(schema.either, params);
  assertRequiredParams(schema.required, params);

  let available = [];
  if (schema.either) {
    schema.either.forEach((pair) => {
      available.push(pair[0]);
      available.push(pair[1]);
    });
  }
  if (schema.required) {
    available = available.concat(schema.required);
  }
  if (schema.optional) {
    available = available.concat(schema.optional);
  }

  assertOptionalParams(available, params);
}

/**
 * Validates general/ common params used from the api
 * @param Object params
 * @param Object overloadSchema - use this schema instead
 */
function validateGeneralParams (params, overloadSchema) {
  assert(params, 'params not defined');

  const schema = {
    required: ['platform'],
    optional: ['game']
  };
  if (overloadSchema) {
    assertParams(overloadSchema, params);
  } else {
    assertParams(schema, params);
  }
}

/**
 * Validates user specific params used by the api
 * @param Object params
 * @param Object overloadSchema - use this schema instead
 */
function validateUserParams (params, overloadSchema) {
  assert(params, 'params not defined');

  const schema = {
    required: ['platform'],
    either: [ ['personaId', 'displayName'] ],
    optional: ['game']
  };

  if (overloadSchema) {
    assertParams(overloadSchema, params);
  } else {
    assertParams(schema, params);
  }

  assert(params.platform == 1 || params.platform == 2 || params.platform == 3, 'platform must be 1, 2, or 3.');
  if (params.game) {
    assert(params.game === 'tunguska' || params.game === 'bf4', 'game can be either tunguska or bf4');
  }
}

module.exports = {
  assertRequiredParams,
  assertOptionalParams,
  assertParams,
  validateGeneralParams,
  validateUserParams
};
