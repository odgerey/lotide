const assertArrays = function (actual, expected){ 
  if(actual, expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}  

//function findKeyByValue
//Scan object and return the first key which contains a value

//If no key, return undefined
const findKeyByValue = function(object, value){
  return Object.keys(object).find(key => object[key] === value);
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertArrays(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertArrays(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);