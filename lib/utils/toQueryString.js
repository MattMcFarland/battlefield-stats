const toQueryString = obj =>
  Object.keys(obj).reduce((acc, key) =>
    acc += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]) + '&'
  , '?').slice(0, -1);

module.exports = toQueryString;