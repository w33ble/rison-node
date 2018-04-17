var test = require('tape');
var rison = require('../');

test('basic object encoding', function(t) {
  t.plan(2);

  var decoded = { hello: 'world' };
  var encoded = '(hello:world)';

  t.equal(rison.encode(decoded), encoded);
  t.deepEqual(rison.decode(encoded), decoded);
});

test('basic object encoding', function(t) {
  t.plan(2);

  var decoded = { hello: 'odd(characters:)' };
  var encoded = "(hello:'odd(characters:)')";

  t.equal(rison.encode(decoded), encoded);
  t.deepEqual(rison.decode(encoded), decoded);
});

test('basic number encoding, prop is not quoted', function (t) {
  t.plan(2);

  var decoded = { 1: 'one' };
  var encoded = '(\'1\':one)';

  t.equal(rison.encode(decoded), encoded);
  t.deepEqual(rison.decode(encoded), decoded);
});
