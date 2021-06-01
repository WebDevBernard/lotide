const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArr = [];
  if (array.length < 3) {
    return newArr;
  }
  if (array.length % 2 === 0) {
    newArr.push(array[array.length / 2 - 1], array[array.length / 2]);
  } else {
    newArr.push(array[(array.length - 1) / 2]);
  }
  return newArr;
};

module.exports = middle;