var test = require('tape');
var rison = require('../');

test('date value', function (t) {
  t.plan(1);

  var val = new Date();
  var expectedVal = val.toJSON();

  var output = rison.encode({ dateval: val });
  t.equal(output, '(dateval:\'' + expectedVal + '\')');
});