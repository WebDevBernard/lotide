const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  let newArr = [];
  if (array.length < 3) {
    return newArr;
  }
  if (array.length % 2 === 0) {
    newArr.push(array[array.length / 2 - 1], array[array.length / 2]);
  } else {
    newArr.push(array[(array.length - 1) / 2]); //alternative way to do it is math.floor(array.length / 2)
  }
  return newArr;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
