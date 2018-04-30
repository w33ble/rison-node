var test = require('tape');
var rison = require('../');

test('date value', function(t) {
  t.plan(2);

  var val = new Date();
  var expectedVal = val.toJSON();

  var output = rison.encode({ dateval: val });
  t.equal(output, "(dateval:'" + expectedVal + "')", 'encodes date objects');
  t.deepEqual(
    rison.decode(output),
    { dateval: expectedVal },
    'decodes dates as strings'
  );
});
