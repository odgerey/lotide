const middle = function(array) {
    const middleNumber = [];
    if (array.length <= 2){
      middleNumber.push([]);
      
    } else if (array.length % 1 === 0) {
      const index = Math.round((array.length - 1) / 2)
      middleNumber.push(array[index]);
    } else if (array.length%2 === 0){
      middleNumber.push(array[Math.floor(array.length / 2)]);
      middleNumber.push(array[Math.floor((array.length - 1) / 2)]);
    } 
  return middleNumber
}

module.exports = middle;