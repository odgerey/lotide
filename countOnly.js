const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else{
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

// countOnly has an array & an Object
// returns an object containing counts of everything that the input object listed
//what's in array and in object needs to match to be an output

//allItms: an array of strings that we need to look through
//itemsToCount: an object specifying what to count
// fucntion should report back how many times each string are found in allItems array of strings
//Functions can only return one thing it can be a data type or return an object
//function countOnly need to return a proper repot on all the strings found in the input array and their counts
//NEEDS TO RETURN AN OBJECT
const countOnly = function(allItems, itemsToCount){
const results = {};

for (const item of allItems) {
// inside the loop, 
// increment the counter for each item:
//   set a property with that string key to:
//     the value that was already there (or zero if nothing there) with 1 added to it.
  if (results[item]) {
    results[item] += 1;
  } else {
    results[item] = 1;
  }
}
return results 
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);