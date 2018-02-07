const test = require('tape');
const flattenObject = require('./flattenObject.js');

test('Testing flattenObject', (t) => {
  //For more information on all the methods supported by tape
  //Please go to https://github.com/substack/tape
  t.true(typeof flattenObject === 'function', 'flattenObject is a Function');
  t.deepEqual(flattenObject({ a: { b: { c: 1 } }, d: 1 }), { 'a.b.c': 1, d: 1 }, 'Flattens an object with the paths for keys');
  //t.deepEqual(flattenObject(args..), 'Expected');
  //t.equal(flattenObject(args..), 'Expected');
  //t.false(flattenObject(args..), 'Expected');
  //t.throws(flattenObject(args..), 'Expected');
  t.end();
});
