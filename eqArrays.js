const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

const eqArrays = function(array, array2){
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array2.length; j++){
      // if the content of array i and content of array j match
      if (array[i] === array2[j]){
        return true
      } else{
      return false 
    }
  }
}
}

// implement function eqArrays
//function takes in two arrays and returns true or false based on perfect match ===
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
