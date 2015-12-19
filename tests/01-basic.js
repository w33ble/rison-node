var test = require('tape');
var rison = require('../');

test('basic object encoding', function (t) {
  t.plan(1);

  var output = rison.encode({ hello: 'world' });
  t.equal(output, '(hello:world)');
});

test('basic object encoding', function (t) {
  t.plan(1);

  var output = rison.encode({ hello: 'odd(characters:)' });
  t.equal(output, '(hello:\'odd(characters:)\')');
});