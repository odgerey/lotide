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

module.exports = eqArrays;

