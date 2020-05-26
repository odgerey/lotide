const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};


// const tail = function (actualArray) {
//   let result = [];
// for (let i = 1; i < actualArray.length; i++){
//   result.push(actualArray[i]);
// } return result;
// }; actualArray=[1,2,5,7]
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual
// assertEqual(tail(actualArray.length, 2));
// assertEqual(tail(actualArray[0],"Lighthouse"));
// assertEqual(tail(actualArray[1], "Labs"));





const tail = function (TEST) {
  let result = [];
for (let i = 1; i < TEST.length; i++){
  result.push(TEST[i]);
} return result;
}; // let actualArray =[1,5,7,8]
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(tail(["Yo Yo", "Lighthouse","Labs"]));
// assertEqual(TEST.length, 2);
// assertEqual(TEST[0],"Lighthouse");
// assertEqual(TEST[1], "Labs");

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"