const eqArrays = function(firstArray, secondArray){
  //Check if the firstArray share the same length
  if (firstArray.length === secondArray.length){
    for (let i = 0; i < firstArray.length; i++){
        // if the content of firstArray i and content of firstArray j match
        if (firstArray[i] != secondArray[i]){
          return false
        } 
    }
  return true
  }
}  

const assertArraysEqual = function (actual, expected){ 
  if(eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}  

const middle = function(array) {
    const middleNumber = [];
    if (array.length <= 2){
      middleNumber.push([]);
    } else if (array.length%1 === 0){
      const index = Math.round((array.length - 1) / 2)
      middleNumber.push(array[index]);
    } else if (array.length%2 === 0){
      middleNumber.push(array[Math.floor(array.length / 2)]);
      middleNumber.push(array[Math.floor((array.length - 1) / 2)]);
    } 
  return middleNumber
}
assertArraysEqual(middle([1])); // =>[]
assertArraysEqual(middle([1, 2])); // => []

assertArraysEqual(middle([1, 2, 3])); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5])); // => [3]

assertArraysEqual(middle([1, 2, 3, 4])); // => [2,3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));// => [3,4]


// create a function middle which will take in an array CHECK

// return the middle-most elements of the given array

//arrays with one or two elements = return empty...no middle CHECK
//middle([1]) // => []
//middle([1, 2]) // => []


//arrays with odd number of elements, or an array containing a single middle element should be returned
//middle([1, 2, 3]) // => [2]
//middle([1, 2, 3, 4, 5]) // => [3]

//arrays with even number of elements, or an array contianing the two elements in the middle should be returned
//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]