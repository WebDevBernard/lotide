const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const without = function(arrOne, arrTwo) {
  let newArr = [];
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      newArr.push(arrOne[i]);
    }
  }
  return newArr;
};

assertArraysEqual(without([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual(without([1, 2, 3], [3, 2, 1])); // => false

assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"])); // => true
assertArraysEqual(without(["1", "2", "3"], ["1", "2", 3])); // => false

