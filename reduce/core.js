function sum (array) {
  return array.reduce(function(accumulator, currentValue) {
    return accumulator += currentValue;
  })
}

function productAll (array) {
  return array.reduce(function(accumulator, value) {
    return accumulator *= value.reduce(function(intAccumulator, row) {
      return intAccumulator *= row;
    }, 1);
  }, 1);
}

function objectify (array) {
  return array.reduce(function(accumulator, row) {
    accumulator[row[0]] = row[1];
    return accumulator;
  }, {})
}

function luckyNumbers (array) {
  return array.reduce(function(accumulatorString, value, index) {
    if(index === array.length - 1) {
      return accumulatorString += "and " + value;
    }
    else {
      return accumulatorString += value + ", "
    };
  }, "Your lucky numbers are: ")
}


module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
