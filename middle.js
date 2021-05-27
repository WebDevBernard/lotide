const assertArrayEqual = function (actual, expected) {
  if (actual === expected) {
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

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false

assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false


const without = function (arrOne, arrTwo) {
  let newArr = []
  for (let i = 0; i < arrOne.length; i++){
    if (arrOne[i] !== arrTwo[i]){
      newArr.push(arrOne[i])
    }
  }
  return newArr
} 

console.log(without([1, 2, 3], [1, 2]))
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]