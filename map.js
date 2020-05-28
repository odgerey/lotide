//map function takes two arguments: an array to map & a callback function
//map function returns a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results
}
const results1 = map(words, word => word[0]);



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

assertArraysEqual(map(['g','c','t','m','t'], function(x) {return x + "yy"}),['gyy','cyy','tyy','myy','tyy'])
//assertArraysEqual(map(['g','c','t','m','t'], function['a','b','r','j','q'])
assertArraysEqual(map([2,3,4,5],x => x + 2),[4,5,6,7]);
assertArraysEqual(map([2,3,4,5],x => x ** 2),[4,9,16,25]);

assertArraysEqual(map(["sam","jack","bob","charles"],x => "hello " + x),["hello sam","hello jack","hello bob","hello charles"]);
console.log(map(["sam","jack","bob","charles"],x => "hello " + x));
