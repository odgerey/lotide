const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

const head = function(actualArray) {
return actualArray[0]
};

const tail = function (actualArray) {
  let result = [];
for (let i = 1; i < actualArray.length; i++){
  result.push(actualArray[i]);
} return result;
}; 
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(actualArray.length, [2,5,7]);
assertEqual(actualArray[0], 5);
assertEqual(actualArray[1], 7);