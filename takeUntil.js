//function(array,callback)
//return elements.slice(array)
//Should loop until callback returns true
//Callback should only be provided one value:The item in the array.

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array){
    if(callback(item)){
    results.slice(item);
    results.push(item);
    }
  }  
  return results
}


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



const assertArraysEqual = function (actual, expected){ 
  if(eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}  

assertArraysEqual(takeUntil([1,2,5,7,2,-1,2,4,5],x => x >= 4), [5,7,4,5]);
assertArraysEqual(takeUntil(["Jelly","is","good","."], x => x === "Jelly"), ["Jelly"]);
