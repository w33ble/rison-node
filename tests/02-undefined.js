var test = require('tape');
var rison = require('../');

test('timing test', function (t) {
  t.plan(1);

  var output = rison.encode({ hello: 'world', nope: undefined });
  t.equal(output, '(hello:world)');
});