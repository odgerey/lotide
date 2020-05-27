const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

// create function countLetters
//takes in a sentence (as a string) and then return a count of each of the letters in that sentence
//example: countLetters('LHL') should  return results indicating that L appeared twice and H once
//output:
//{L: 2, H: 1};
const countLetters = function (sentence){
  const results = {};
  for (const letters of sentence) {
    if (letters === " "){
      continue;
    }
    if (results[letters]){
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
    
  } 
  return results
} 

console.log(countLetters("lighthouse in the house"));