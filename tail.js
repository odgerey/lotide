const tail = function (TEST) {
  let newArray = [];
for (let i = 1; i < TEST.length; i++){
  newArray.push(TEST[i]);
} return newArray;
}; 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it


const result = tail(["Hello", "Lighthouse", "Labs"]);

module.exports = tail;
module.exports = words;
module.exports = result;
