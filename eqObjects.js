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
        console.log(14)
        return true
      } else{
      return false 
    }
  }
}
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2){
  const results = {};
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (let key of Object.keys(object1)) {
    // Case for Arrays as Values
    
    // Array.isArray(object1[key]) => returns boolean (true or false)

//     After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
// Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
// As soon as there is not a match, we can return false

//We presume they have the same type if they pass that condition
    if (typeof(object1[key]) !== (typeof(object2[key]))){
        return false 
    };
// We presume we aren't failing because it has same key & values but with array 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const arrayEquals = eqArrays(object1[key], object2[key])
      if (arrayEquals === false){
        return false;
    }
    } else if(object1[key] !== object2[key]){
      return false;
    }
  return true;
  }
};

    // Case for primitives as Values






const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false