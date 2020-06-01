const assert = require('chai').assert;
const head = require('../head');
//const assertEqual = require('..assertEqual');

describe("#head", () => {
  it ("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it ("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it ("returns 'Lighthouse Labs' for ['Bootcamp']", () => {
    assert.notStrictEqual(head(['Bootcamp']), 'Lighthouse Labs')
  });

  it ("returns '1' for ['1']", () => {
    assert.strictEqual(head(['1']), '1');
  });

  it ("returns '5' for ['5','6','7']", () => {
    assert.include(head(['5','6','7']), '5');
  });

  it ("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.include(head(['Hello','Lighthouse', 'Labs']), 'Hello');
  });


})



//const head = require('../head');
//const assertEqual = require('../assertEqual');

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//module.exports = head;
//module.exports = assertEqual;