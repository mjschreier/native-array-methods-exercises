function multiplyBy10 (array) {
  return array.map(function(element) {
    return element * 10;
  })
};

function shiftRight (array) {
  return array.map(function(element, index, arr) {
    return arr[index - 1] || arr[arr.length - 1];
  })
};

function onlyVowels (array) {
  return array.map(function(string) {
    return string.replace(/[^aeiou]/ig,"")
  })
};

function doubleMatrix (array) {
  return array.map(function(row) {
    return row.map(function(value) {
      return value * 2
    })
  })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
