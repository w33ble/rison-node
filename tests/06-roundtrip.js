/* eslint no-console: 0 */
var test = require('tape');
var rison = require('../');

test('characters should roundtrip through encode_uri/decode_uri', function(t) {
  t.plan(1);

  var originalObject = { ' &+~!*()-_.\'",:@$/': ' &+~!*()-_.\'",:@$/' };
  var encodeThenDecode = rison.decode_uri(rison.encode_uri(originalObject));
  t.deepEqual(
    encodeThenDecode,
    originalObject,
    'obj -> encode -> decode = obj'
  );
});
