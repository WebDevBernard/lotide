const assertEqual = function(actual, expected) {
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

assertEqual([1, 2, 3], [1, 2, 3]); // => true
assertEqual([1, 2, 3], [3, 2, 1]); // => false

assertEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(["1", "2", "3"], ["1", "2", 3]); // => false



