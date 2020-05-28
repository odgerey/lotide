const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

const eqArrays = function(array, array2){
  if (array.length !== array2.length)
    return false 
  for (let i = 0; i < array.length; i++){
      // if the content of array i and content of array j match
      if (array[i] !== array2[i]){
        return false;
      }
    } return true
  };

// implement function eqArrays
//function takes in two arrays and returns true or false based on perfect match ===
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
