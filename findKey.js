const assertArraysEqual = function (actual, expected){ 
  if(eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}  

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

const findKey = function (object, callback) {
  const result = [];
  for (let key of Object.keys(object)) {
    if (callback(object[key])){
      result.push(key)
    }
  } 
  return result
}


const objects = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
};

//findKey(objects, (item) => stars === [2]);
assertArraysEqual(findKey(objects , x => x.stars === 2), ["noma","Ora"]) // => "noma"





//assertEqual(findKey(objects, (item) => x.stars === [2]), "noma")

 // filter(movies , (movie) =>  ['rating'] >= 8);
 // filter(movies , (movie) =>  ['genre'] === "Comedy");



//assertEqual(
//  (findKey({
//"Blue Hill": { stars: 1 },
//"Akaleri":   { stars: 3 },
//"noma":      { stars: 2 },
//"elBulli":   { stars: 3 },
// "Ora":       { stars: 2 },
//  "Akelarre":  { stars: 3 }
//});


//Reference
//assertArraysEqual(takeUntil([1,2,5,7,2,-1,2,4,5],x => x >= 4), [5,7,4,5]);
//assertArraysEqual(takeUntil(["Jelly","is","good","."], x => x === "Jelly"), ["Jelly"]);