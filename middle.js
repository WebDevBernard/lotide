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

const middle = function(array){
  newArr = []
  if (array.length < 3) {
    return newArr;
  }
  if (array.length % 2 === 0){
    newArr.push(array[array.length/2 - 1], array[array.length/2])
      } else {
    newArr.push(array[(array.length - 1) / 2]) //alternative way to do it is math.floor(array.length / 2)
      }
  return newArr
}

assertArrayEqual(eqArrays(middle([1]), []), true) // => []
assertArrayEqual(eqArrays(middle([1, 2]), []), true) // => []

assertArrayEqual(eqArrays(middle([1, 2, 3]), [2]), true) // => [2]
assertArrayEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true)// => [3]

assertArrayEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true) // => [2, 3]
assertArrayEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true)// => [3, 4]
