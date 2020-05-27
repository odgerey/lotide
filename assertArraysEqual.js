

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
const assertArraysEqual = function (actual, expected){ 
  if(eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}  
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[3,2,1]);
// assertArraysEqual function takes two arrays
//console.log an appropriate message
//instead of using === you're using eqArrays