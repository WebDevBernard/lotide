
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word.length), ['6', '7', '2', '5', '3']);
assertArraysEqual(map(words, word => word[0].toUpperCase()), ['G', 'C', 'T', 'M', 'T']);