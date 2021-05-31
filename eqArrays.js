const assertEqual = require('./assertEqual');
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;
/*
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual( [1, 2, 3], [3, 2, 1]); // => false

assertEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(["1", "2", "3"], ["1", "2", 3]); // => false
*/


