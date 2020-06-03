var test = require('tape');
var rison = require('../');

test('basic object encoding', function(t) {
  t.plan(2);

  var decoded = { hello: 'world' };
  var encoded = '(hello:world)';

  t.equal(rison.encode(decoded), encoded, 'encodes simple object');
  t.deepEqual(rison.decode(encoded), decoded, 'decodes simple object');
});

test('basic object encoding', function(t) {
  t.plan(2);

  var decoded = { hello: 'odd(characters:)' };
  var encoded = "(hello:'odd(characters:)')";

  t.equal(
    rison.encode(decoded),
    encoded,
    'encodes object with url unsafe characters'
  );
  t.deepEqual(
    rison.decode(encoded),
    decoded,
    'decodes object with url unsafe characters'
  );
});

test('object with alpha key encoding', function(t) {
  t.plan(2);

  var decoded = { '1m': 'odd(characters:)' };
  var encoded = "('1m':'odd(characters:)')";

  t.equal(
    rison.encode(decoded),
    encoded,
    'encodes object with url unsafe characters'
  );
  t.deepEqual(
    rison.decode(encoded),
    decoded,
    'decodes object with url unsafe characters'
  );
});

test('object with number key encoding', function(t) {
  t.plan(2);

  var decoded = { 1: 'odd(characters:)' };
  var encoded = "(1:'odd(characters:)')";

  t.equal(
    rison.encode(decoded),
    encoded,
    'encodes object with url unsafe characters'
  );
  t.deepEqual(
    rison.decode(encoded),
    decoded,
    'decodes object with url unsafe characters'
  );
});

test('basic number encoding, prop is not quoted', function(t) {
  t.plan(3);

  var decoded = { 1: 'one' };
  var encoded = '(1:one)';

  t.equal(rison.encode(decoded), encoded, 'encodes number keys without quotes');
  t.deepEqual(
    rison.decode(encoded),
    decoded,
    'decodes number keys without quotes'
  );

  // check that quoted values still work
  t.deepEqual(
    rison.decode("('1':one)"),
    decoded,
    'decoded, decodes number keys with quotes'
  );
});
