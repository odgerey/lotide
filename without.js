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

const without = function (source, itemsToRemove){
  newArray = [];
  for (let k = 0; k < source.length; k ++){
    if (itemsToRemove.includes(source[k]) === false){
      newArray.push(source[k])
    }
  }return newArray
}
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);