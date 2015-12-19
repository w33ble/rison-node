var test = require('tape');
var rison = require('../');

test('undefined value', function (t) {
  t.plan(1);

  var output = rison.encode({ hello: 'world', nope: undefined });
  t.equal(output, '(hello:world)');
});