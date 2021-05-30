const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let count = {};
  for (const i of string) {
    // console.log(i)
    if (i !== ' ') {
      if (count[i]) {
        count[i] += 1;
      } else {
        count[i] = 1;
      }
    }
  }
  return count;
};

console.log(countLetters('lighthouse in the house'));
assertEqual(countLetters('lighthouse in the house'));