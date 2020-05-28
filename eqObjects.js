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

const eqObjects = function(object1, object2){
  const results = {};
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (let key of Object.keys(object1)) {
    
    if (typeof(object1[key]) !== (typeof(object2[key]))){
        return false 
    };
    
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const arrayEquals = eqArrays(object1[key], object2[key])
      if (arrayEquals === false){
        return false;
      }
    } else if(object1[key] !== object2[key]){
      return false;
    }
  }return true;
}; 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false