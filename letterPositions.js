const assertArrays = function (actual, expected){ 
  if(actual, expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}  


const letterPositions = function(sentence) {
  const results = {};
  
  for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " "){
      continue;
    }
    
    if (results[sentence[i]]){
      results[sentence[i]].push(i)
    
    } else {
      results[sentence[i]] = [i]
      
    }
  }
  // logic to update results here
  return results;
};

console.log(assertArrays(letterPositions("hello").e, [1]));