function onlyEven (array) {
  return array.filter(function(number) {
    if(number % 2 === 0) {
      return number;
    }
  })
};

function onlyOneWord (array) {
  return array.filter(function(string) {
    if(!/.{1,}\ .{1,}/.test(string)) {
      return string;
    }
  })
};

function positiveRowsOnly (array) {
  return array.filter(function(row) {
    if(row.length === row.filter(function(value) {
      if(value >= 0){
        return value;
    }}).length) {
      return row;
    }
  })
};

// Still need to finish
function allSameVowels (array) {
  return array.filter(function(word) {
    if()
  })
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
