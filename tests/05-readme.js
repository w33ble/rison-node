var test = require('tape');
var rison = require('../');

test('should do what the README says it does', function(t) {
  t.plan(2);
  var decoded = { any: 'json', yes: true };
  var encoded = '(any:json,yes:!t)';

  t.equal(rison.encode(decoded), encoded);
  t.deepEqual(rison.decode(encoded), decoded);
});

test('should handle deeply nested objects', function(t) {
  t.plan(2);

  var decoded = {
    A: {
      B: {
        C: {
          D: 'E',
          F: 'G',
        },
      },
      H: {
        I: {
          J: 'K',
          L: 'M',
        },
      },
    },
  };
  var encoded = '(A:(B:(C:(D:E,F:G)),H:(I:(J:K,L:M))))';

  t.equal(rison.encode(decoded), encoded);
  t.deepEqual(rison.decode(encoded), decoded);
});

test('encode_object and decode_object', function(t) {
  t.plan(2);

  var decoded = { supportsObjects: true, ints: 435 };
  var encoded = 'ints:435,supportsObjects:!t';

  t.equal(rison.encode_object(decoded), encoded);
  t.deepEqual(rison.decode_object(encoded), decoded);
});

test('encode_array and decode_array', function(t) {
  t.plan(2);

  var decoded = ['A', 'B', { supportsObjects: true }];
  var encoded = 'A,B,(supportsObjects:!t)';

  t.equal(rison.encode_array(decoded), encoded);
  t.deepEqual(rison.decode_array(encoded), decoded);
});
