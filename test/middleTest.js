
const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  
  it ("returns empty if only one value ['1']", () => {
    assert.deepEqual(middle(['1']), []);
  });

  it ("returns empty if only two values ['1','2']", () => {
    assert.deepEqual(middle(['1', '2']), []);
  });

  it ("returns '2' as a middle if the array is odd ['1','2','3']", () => {
    assert.deepEqual(middle(['1','2','3']), ['2']);
  });

  it ("returns '3' as a middle if the array is odd ['1','2','3','4','5']", () => {
    assert.deepEqual(middle(['1','2','3','4','5']), ['3']);
  })

  it ("returns ['2','3'] as a middle if the array is even ['1','2','3','4']", () => {
    assert.deepEqual(middle(['1','2','3','4']), ['2','3']);
  })

  it ("returns ['3','4'] as a middle if the array is even ['1','2','3','4','5','6']", () => {
    assert.deepEqual(middle(['1','2','3','4','5','6']), ['3','4']);
  })
});

//assertArraysEqual(middle([1]),[]);   // =>[]
//assertArraysEqual(middle([1, 2]), []); // => []

//assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
//assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

//assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2,3]
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);// => [3,4]


module.exports = middle;