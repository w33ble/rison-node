var test = require('tape');
var rison = require('../');

test('validate decode input', function (t) {
  t.plan(3);

  t.throws(function () {
    rison.decode({ one: 1 });
  }, /must be a string/, 'should throw given an object');

  t.throws(function () {
    rison.decode([1,2,3]);
  }, /must be a string/, 'should throw given an array');

  t.doesNotThrow(function () {
    rison.decode('(one:1)');
  }, 'should not throw given a string');
});