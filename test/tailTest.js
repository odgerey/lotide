const assert = require('chai').assert;
const {tail} = require('../tail');

describe("#tail", () => {

  it ("returns '2' which is the 'result.length'", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result.length, 2);
  })

  it ("returns 'Lighthouse' which is the 'result[0]'", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[0], 'Lighthouse')
  })

  it ("returns 'Labs' which is the 'result[1]'", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[1], 'Labs')
  })


})

//const result = tail(["Hello", "Lighthouse", "Labs"]);

//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs"); // ensure second element is "Labs"


//module.exports = tail;
//module.exports = assertEqual;
//module.exports = words;
//module.exports = result;
